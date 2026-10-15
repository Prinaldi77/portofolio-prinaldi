import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Send, LogOut, CheckCircle2, MessageSquare } from 'lucide-react';
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

export const GuestbookDrawer: React.FC<GuestbookDrawerProps> = ({
  isOpen,
  onClose,
  guestbookData,
  guestbook,
  currentLang = 'en',
}) => {
  const data = guestbook || guestbookData;
  const isId = currentLang === 'id';

  // Fallback initial entries - empty by default (no fake AI entries)
  const initialEntries: GuestbookEntry[] = data?.entries || [];

  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [inputMessage, setInputMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
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

  // Fetch real entries from Supabase
  const fetchEntries = async () => {
    if (!isSupabaseConfigured) return;
    try {
      const { data: dbEntries, error } = await supabase
        .from('guestbook_entries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Error loading guestbook:', error);
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
            avatar:
              item.avatar_url ||
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            provider: 'github',
            date: formattedDate,
            message: item.message,
          };
        });
        setEntries(mapped);
      }
    } catch (err) {
      console.warn('Failed to fetch guestbook:', err);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchEntries();
    }
  }, [isOpen]);

  // Sync Supabase Auth session
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
          name: user.user_metadata?.full_name || user.user_metadata?.user_name || user.email?.split('@')[0] || 'Developer',
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
          name: user.user_metadata?.full_name || user.user_metadata?.user_name || user.email?.split('@')[0] || 'Developer',
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

  // Handle Social Sign In
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
      } catch (err) {
        console.warn('Supabase OAuth error, fallback to interactive mock:', err);
      }
    }

    // Interactive mock sign in for testing
    setCurrentUser({
      name: provider === 'github' ? 'GitHub Developer' : 'Google Explorer',
      avatar:
        provider === 'github'
          ? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80'
          : 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
      provider,
    });
  };

  const handleSignOut = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    setCurrentUser(null);
  };

  // Handle Submit New Guestbook Note
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
      handle: currentUser?.provider === 'github' ? '@developer' : '@visitor',
      avatar:
        currentUser?.avatar ||
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      provider: currentUser?.provider || 'github',
      date: formattedDate,
      message: inputMessage.trim(),
    };

    // Attempt real Supabase insert if configured
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
      } catch (err) {
        console.warn('Supabase insert note, maintaining local list:', err);
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
      {/* 1. Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 2. Slide-out Panel dari Sisi Kanan Layar (Slide-in Animation) */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-white dark:bg-neutral-950 border-l-2 border-black dark:border-neutral-800 shadow-2xl flex flex-col justify-between transform transition-all duration-300 ease-out z-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header Drawer: Judul "GUESTBOOK", Jumlah Pesan, & Tombol Close (X) */}
        <div className="p-5 border-b-2 border-black dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-900 shrink-0 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center transition-colors">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h2
              id="guestbook-drawer-title"
              className="text-xl font-black uppercase text-black dark:text-white tracking-tight transition-colors"
            >
              GUESTBOOK
            </h2>
            <span className="px-2.5 py-0.5 rounded-full border border-black dark:border-neutral-700 bg-white dark:bg-neutral-950 text-xs font-mono font-bold text-black dark:text-white shadow-hard-sm dark:shadow-hard-sm-white transition-colors">
              {entries.length} {isId ? 'pesan' : 'signatures'}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-black dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center justify-center transition-colors shadow-hard-sm dark:shadow-hard-sm-white cursor-pointer"
            title="Tutup (ESC)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Bagian Auth & Form */}
        <div className="p-4 bg-neutral-100/70 dark:bg-neutral-900/70 border-b-2 border-black dark:border-neutral-800 shrink-0 transition-colors">
          {!currentUser ? (
            <div>
              <p className="text-[11px] font-mono font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2.5">
                {isId ? 'Masuk untuk menulis pesan di buku tamu:' : 'Sign in to sign the guestbook:'}
              </p>
              {/* Tombol Pilihan Login: GitHub */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSocialSignIn('github')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-bold bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 border border-black dark:border-white shadow-hard-sm dark:shadow-hard-sm-white transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>{isId ? 'Masuk dengan GitHub' : 'Sign in with GitHub'}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-mono font-bold text-black dark:text-white">
                  {isId ? 'Sebagai:' : 'Signed in as:'} <span className="underline font-black">{currentUser.name}</span>
                </span>
              </div>
              <button
                type="button"
                onClick={handleSignOut}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white underline cursor-pointer"
              >
                <LogOut className="w-3 h-3" />
                <span>{isId ? 'Keluar' : 'Sign out'}</span>
              </button>
            </div>
          )}
        </div>

        {/* List Komentar: Daftar Chat / Pesan Pengunjung Lengkap */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {entries.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-12 h-12 rounded-2xl border-2 border-black dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mx-auto mb-3 shadow-hard-sm dark:shadow-hard-sm-white transition-colors">
                <MessageSquare className="w-6 h-6 text-black dark:text-white" />
              </div>
              <p className="font-mono font-bold text-sm text-black dark:text-white mb-1 transition-colors">
                {isId ? 'Buku Tamu Masih Kosong' : 'Guestbook is Clean'}
              </p>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-xs mx-auto leading-relaxed transition-colors">
                {data?.emptyText || (isId ? 'Belum ada catatan pengunjung. Masuk menggunakan GitHub atau Google untuk meninggalkan pesan pertama!' : 'No visitor notes recorded yet. Sign in to leave the very first note.')}
              </p>
            </div>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="space-y-2">
                {/* Visitor Message Bubble */}
                <div className="flex items-start gap-3">
                  <img
                    src={entry.avatar}
                    alt={entry.name}
                    className="w-8 h-8 rounded-full object-cover border border-black dark:border-neutral-700 shrink-0 shadow-hard-sm dark:shadow-hard-sm-white"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-black dark:text-white">{entry.name}</span>
                      {entry.handle && (
                        <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">{entry.handle}</span>
                      )}
                      <span className="text-[10px] font-mono text-neutral-400 ml-auto">{entry.date}</span>
                    </div>

                    {/* Balon Pesan Monokrom */}
                    <div className="p-3.5 rounded-2xl rounded-tl-sm bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-black dark:text-neutral-100 leading-relaxed border border-black dark:border-neutral-700 shadow-hard-sm dark:shadow-hard-sm-white transition-colors">
                      {entry.message}
                    </div>
                  </div>
                </div>

                {/* Balon Balasan Developer (Jika Ada) */}
                {entry.replies &&
                  entry.replies.map((reply) => (
                    <div key={reply.id} className="pl-11 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-hard-sm dark:shadow-hard-sm-white transition-colors">
                        MP
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-black text-black dark:text-white">{reply.name}</span>
                          <span className="text-[9px] bg-black dark:bg-white text-white dark:text-black px-1.5 py-0.5 rounded font-mono font-bold">
                            DEV
                          </span>
                          <span className="text-[9px] font-mono text-neutral-400 ml-auto">{reply.date}</span>
                        </div>
                        <div className="p-3 rounded-2xl rounded-tl-sm bg-neutral-950 dark:bg-neutral-800 text-white text-xs font-mono leading-relaxed border border-black dark:border-neutral-700 shadow-hard-sm dark:shadow-hard-sm-white transition-colors">
                          {reply.message}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))
          )}
        </div>

        {/* Form Input Pesan Singkat */}
        <div className="p-4 border-t-2 border-black dark:border-neutral-800 bg-white dark:bg-neutral-950 shrink-0 space-y-2 transition-colors">
          {feedbackSuccess && (
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{isId ? 'Pesan berhasil diposting!' : 'Message posted successfully!'}</span>
            </div>
          )}

          {!currentUser ? (
            <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">
              <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                {isId ? 'Masuk dengan GitHub untuk menulis pesan:' : 'Sign in with GitHub to write a note:'}
              </span>
              <button
                type="button"
                onClick={() => handleSocialSignIn('github')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white shadow-hard-xs transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
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
                  placeholder={
                    isId
                      ? `Tulis pesan sebagai ${currentUser.name}...`
                      : `Write a message as ${currentUser.name}...`
                  }
                  className="flex-1 px-4 py-2.5 text-xs font-mono rounded-full border border-black dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-black dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !inputMessage.trim()}
                  className="px-5 py-2.5 bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-50 text-white dark:text-black text-xs font-mono font-bold rounded-full border border-black dark:border-white flex items-center gap-1.5 transition-all shadow-hard-sm dark:shadow-hard-sm-white cursor-pointer shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isId ? 'Kirim' : 'Post'}</span>
                </button>
              </div>
            </form>
          )}

          <p className="text-[10px] text-center text-neutral-500 dark:text-neutral-400 font-mono">
            {isId
              ? 'Terhubung dengan real-time database via Supabase'
              : 'Connected with real-time database via Supabase client'}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GuestbookDrawer;
