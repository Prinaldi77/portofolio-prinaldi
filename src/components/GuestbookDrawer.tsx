import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, Send, LogOut, CheckCircle2, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { GuestbookEntry, Language } from '../types/portfolio';

interface GuestbookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  guestbookData?: {
    title: string;
    subtitle?: string;
    statusLive?: string;
    signatureCountLabel?: string;
    loginPrompt?: string;
    githubButton?: string;
    googleButton?: string;
    emptyText?: string;
    footerNotice?: string;
    inputPlaceholder?: string;
    sendButton?: string;
    entries?: GuestbookEntry[];
  };
  guestbook?: {
    title: string;
    subtitle?: string;
    statusLive?: string;
    signatureCountLabel?: string;
    loginPrompt?: string;
    githubButton?: string;
    googleButton?: string;
    emptyText?: string;
    footerNotice?: string;
    inputPlaceholder?: string;
    sendButton?: string;
    entries?: GuestbookEntry[];
  };
  currentLang?: Language;
}

interface AuthUser {
  name: string;
  handle?: string;
  email?: string;
  avatar?: string;
  provider: 'github' | 'google';
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase() || 'VN';
};

export const GuestbookDrawer: React.FC<GuestbookDrawerProps> = ({
  isOpen,
  onClose,
  guestbookData,
  guestbook,
  currentLang = 'en',
}) => {
  const data = guestbook || guestbookData;
  const isId = currentLang === 'id';

  const initialEntries: GuestbookEntry[] = data?.entries || [];

  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoadingEntries, setIsLoadingEntries] = useState(false);
  const [loadError, setLoadError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  // Close drawer on Escape key (R-26, R-32)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const fetchEntries = useCallback(async () => {
    if (!isSupabaseConfigured) return;
    await Promise.resolve();
    setIsLoadingEntries(true);
    setLoadError('');
    try {
      const { data: dbEntries, error } = await supabase
        .from('guestbook_entries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setLoadError(
          isId
            ? 'Gagal memuat catatan buku tamu dari server.'
            : 'Could not load guestbook entries from server.'
        );
        return;
      }

      if (dbEntries) {
        const mapped: GuestbookEntry[] = dbEntries.map((item) => {
          const d = new Date(item.created_at);
          const formattedDate = `${d.getDate()} ${d.toLocaleString('default', {
            month: 'short',
          })} ${d.getFullYear()}, ${d.getHours().toString().padStart(2, '0')}:${d
            .getMinutes()
            .toString()
            .padStart(2, '0')}`;
          return {
            id: item.id,
            name: item.name,
            handle: item.handle || undefined,
            avatar: item.avatar_url || '',
            provider: 'github',
            date: formattedDate,
            message: item.message,
          };
        });
        setEntries(mapped);
      }
    } catch {
      setLoadError(
        isId
          ? 'Gangguan jaringan saat memuat buku tamu.'
          : 'Network error while loading guestbook.'
      );
    } finally {
      setIsLoadingEntries(false);
    }
  }, [isId]);

  useEffect(() => {
    if (isOpen) {
      void fetchEntries();
    }
  }, [isOpen, fetchEntries]);

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    supabase.auth.getSession().then(({ data: sessionData }) => {
      const user = sessionData?.session?.user;
      if (user) {
        const ghHandle = user.user_metadata?.user_name
          ? `@${user.user_metadata.user_name}`
          : user.user_metadata?.preferred_username
          ? `@${user.user_metadata.preferred_username}`
          : undefined;

        setCurrentUser({
          name:
            user.user_metadata?.full_name ||
            user.user_metadata?.user_name ||
            user.email?.split('@')[0] ||
            'Visitor',
          handle: ghHandle,
          email: user.email,
          avatar: user.user_metadata?.avatar_url,
          provider: (user.app_metadata?.provider as 'github' | 'google') || 'github',
        });
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user;
      if (user) {
        const ghHandle = user.user_metadata?.user_name
          ? `@${user.user_metadata.user_name}`
          : user.user_metadata?.preferred_username
          ? `@${user.user_metadata.preferred_username}`
          : undefined;

        setCurrentUser({
          name:
            user.user_metadata?.full_name ||
            user.user_metadata?.user_name ||
            user.email?.split('@')[0] ||
            'Visitor',
          handle: ghHandle,
          email: user.email,
          avatar: user.user_metadata?.avatar_url,
          provider: (user.app_metadata?.provider as 'github' | 'google') || 'github',
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleSocialSignIn = async (provider: 'github' | 'google') => {
    if (isSupabaseConfigured) {
      try {
        await supabase.auth.signInWithOAuth({
          provider,
          options: {
            redirectTo: window.location.origin,
          },
        });
        return;
      } catch {
        // Fallback to local guest session when OAuth redirect is unavailable
      }
    }

    setCurrentUser({
      name: isId ? 'Tamu Terverifikasi' : 'Verified Guest',
      handle: '@guest',
      avatar: '',
      provider,
    });
  };

  const handleSignOut = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    setCurrentUser(null);
  };

  const handleSubmitMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setIsSubmitting(true);

    const now = new Date();
    const formattedDate = `${now.getDate()} ${now.toLocaleString('default', {
      month: 'short',
    })} ${now.getFullYear()}, ${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;

    const newEntry: GuestbookEntry = {
      id: `gb-${Date.now()}`,
      name: currentUser?.name || (isId ? 'Pengunjung Tamu' : 'Guest Visitor'),
      handle: currentUser?.handle || '@visitor',
      avatar: currentUser?.avatar || '',
      provider: currentUser?.provider || 'github',
      date: formattedDate,
      message: inputMessage.trim(),
    };

    if (isSupabaseConfigured) {
      try {
        await supabase.from('guestbook_entries').insert([
          {
            name: newEntry.name,
            handle: newEntry.handle,
            message: newEntry.message,
            avatar_url: newEntry.avatar,
            created_at: new Date().toISOString(),
          },
        ]);
        await fetchEntries();
      } catch {
        setEntries([newEntry, ...entries]);
      }
    } else {
      setEntries([newEntry, ...entries]);
    }

    setInputMessage('');
    setIsSubmitting(false);
    setFeedbackSuccess(true);
    setTimeout(() => setFeedbackSuccess(false), 2500);
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="guestbook-drawer-title"
    >
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-white dark:bg-[#050505] border-l border-neutral-200 dark:border-white/15 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out z-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-neutral-200 dark:border-white/15 flex items-center justify-between bg-neutral-50 dark:bg-[#0F0F11] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="guestbook-drawer-title"
                className="font-display text-lg font-black uppercase text-black dark:text-white tracking-tight"
              >
                {isId ? 'BUKU TAMU' : 'GUESTBOOK'}
              </h2>
              <span className="font-mono text-[11px] text-neutral-600 dark:text-neutral-400">
                // {entries.length} {isId ? 'catatan tercatat' : 'recorded notes'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={isId ? 'Tutup Buku Tamu' : 'Close Guestbook'}
            className="w-10 h-10 rounded-full border border-neutral-300 dark:border-white/15 bg-white dark:bg-[#141418] text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center justify-center transition-colors cursor-pointer"
            title="Close (ESC)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Auth Controls */}
        <div className="p-4 bg-neutral-100/70 dark:bg-[#0F0F11]/80 border-b border-neutral-200 dark:border-white/10 shrink-0">
          {!currentUser ? (
            <div>
              <p className="text-[11px] font-mono font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2.5">
                {isId ? 'Masuk untuk menulis pesan di buku tamu:' : 'Sign in to sign the guestbook:'}
              </p>
              <button
                type="button"
                onClick={() => handleSocialSignIn('github')}
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 rounded-full text-xs font-mono font-bold bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>{isId ? 'Masuk dengan GitHub' : 'Sign in with GitHub'}</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono font-bold text-black dark:text-white">
                  {isId ? 'Aktif:' : 'Signed in:'} <span className="underline">{currentUser.name}</span>
                </span>
              </div>
              <button
                type="button"
                onClick={handleSignOut}
                className="inline-flex items-center gap-1 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white underline cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{isId ? 'Keluar' : 'Sign out'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Entries List with Loading, Error, and Empty States (R-27) */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {isLoadingEntries ? (
            <div className="py-16 text-center font-mono text-xs text-neutral-600 dark:text-neutral-400 flex flex-col items-center gap-3">
              <Loader2 className="w-6 h-6 animate-spin text-amber-500" />
              <span>{isId ? 'Memuat catatan buku tamu...' : 'Loading guestbook entries...'}</span>
            </div>
          ) : loadError ? (
            <div className="p-5 rounded-2xl border border-rose-500/40 bg-rose-50 dark:bg-rose-950/20 text-center space-y-3">
              <AlertCircle className="w-6 h-6 text-rose-500 mx-auto" />
              <p className="text-xs font-mono text-rose-700 dark:text-rose-300">{loadError}</p>
              <button
                type="button"
                onClick={fetchEntries}
                className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase cursor-pointer"
              >
                {isId ? 'Coba Lagi' : 'Retry'}
              </button>
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-12 h-12 rounded-2xl border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#0F0F11] flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6 text-black dark:text-white" />
              </div>
              <p className="font-display font-bold text-base text-black dark:text-white mb-1">
                {isId ? 'Buku Tamu Masih Kosong' : 'No Guestbook Notes Yet'}
              </p>
              <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 max-w-xs mx-auto leading-relaxed">
                {data?.emptyText ||
                  (isId
                    ? 'Belum ada catatan pengunjung. Masuk dengan GitHub di atas untuk menulis pesan pertama.'
                    : 'No visitor notes recorded yet. Sign in with GitHub above to leave the first note.')}
              </p>
            </div>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="space-y-2">
                <div className="flex items-start gap-3">
                  {/* Honest initial-based avatar fallback instead of stock photo (R-23) */}
                  {entry.avatar ? (
                    <img
                      src={entry.avatar}
                      alt={entry.name}
                      className="w-8 h-8 rounded-full object-cover border border-neutral-300 dark:border-white/20 shrink-0"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-[#17171A] border border-neutral-300 dark:border-white/15 flex items-center justify-center font-mono text-[11px] font-bold text-black dark:text-white shrink-0">
                      {getInitials(entry.name)}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-black dark:text-white">{entry.name}</span>
                      {entry.handle && (
                        <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                          {entry.handle}
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 ml-auto">
                        {entry.date}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl rounded-tl-sm bg-neutral-100 dark:bg-[#0F0F11] text-xs font-mono text-black dark:text-neutral-100 leading-relaxed border border-neutral-200 dark:border-white/10">
                      {entry.message}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Form */}
        <div className="p-4 border-t border-neutral-200 dark:border-white/15 bg-white dark:bg-[#050505] shrink-0 space-y-2">
          {feedbackSuccess && (
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{isId ? 'Pesan berhasil ditambahkan!' : 'Note posted!'}</span>
            </div>
          )}

          {!currentUser ? (
            <div className="flex items-center justify-between p-3 rounded-2xl bg-neutral-100 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10">
              <span className="text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                {isId ? 'Masuk untuk menulis catatan:' : 'Sign in to leave a note:'}
              </span>
              <button
                type="button"
                onClick={() => handleSocialSignIn('github')}
                className="inline-flex items-center gap-1.5 px-4 min-h-[36px] rounded-full text-xs font-mono font-bold bg-black dark:bg-white text-white dark:text-black cursor-pointer"
              >
                <span>{isId ? 'Masuk' : 'Sign in'}</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitMessage} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  required
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  aria-label={isId ? 'Pesan buku tamu' : 'Guestbook message'}
                  placeholder={
                    isId
                      ? `Tulis pesan sebagai ${currentUser.name}...`
                      : `Write a note as ${currentUser.name}...`
                  }
                  className="flex-1 px-4 min-h-[44px] text-xs font-mono rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-50 dark:bg-[#0F0F11] text-black dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !inputMessage.trim()}
                  className="px-5 min-h-[44px] bg-black dark:bg-white hover:opacity-90 disabled:opacity-50 text-white dark:text-black text-xs font-mono font-bold rounded-full flex items-center gap-1.5 transition-opacity cursor-pointer shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isId ? 'Kirim' : 'Post'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GuestbookDrawer;
