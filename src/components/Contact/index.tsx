import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowUpRight,
  AlertCircle,
} from 'lucide-react';
import type { Profile, Language } from '../../types/portfolio';
import SectionHeader from '../SectionHeader';

interface ContactProps {
  personalInfo?: Profile;
  profile?: Profile;
  currentLang?: Language;
}

export const Contact: React.FC<ContactProps> = ({
  personalInfo,
  profile,
  currentLang = 'id',
}) => {
  const data = profile || personalInfo;
  const isId = currentLang === 'id';

  const email = data?.email || 'muhamadprinaldi123@gmail.com';
  const github = data?.socials?.github || 'https://github.com/Prinaldi77';
  const instagram = data?.socials?.instagram || 'https://www.instagram.com/prnldiiii/';
  const linkedin = data?.socials?.linkedin || 'https://linkedin.com';
  const location = data?.locationCity || 'BANDUNG, ID';

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '9dfcd8d1-4ae9-4461-b02d-9a98b48bff75';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Pesan Portofolio Baru dari ${formData.name}`,
          from_name: `${formData.name} via Web Portofolio`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(
          result.message ||
            (isId
              ? 'Gagal mengirim pesan. Silakan coba lagi atau gunakan tombol Salin Email di atas.'
              : 'Failed to send message. Please try again or use the Copy Email button above.')
        );
      }
    } catch {
      setErrorMessage(
        isId
          ? 'Terjadi kendala jaringan. Silakan hubungi langsung ke alamat email di atas.'
          : 'Network error occurred. Please reach out directly via the email address above.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Kontak dan Footer"
      className="pt-16 sm:pt-24 pb-28 bg-white dark:bg-[#050505] text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="08"
          totalSections="08"
          title={isId ? 'KONTAK & PENUTUP' : 'CONTACT & FOOTER'}
          className="mb-10 sm:mb-12"
        />

        {/* 1. Top: 2 Columns (Inquiries Heading & Availability Status) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pb-12 sm:pb-16 border-b border-neutral-200 dark:border-white/10">
          <div className="lg:col-span-7">
            <span className="block font-mono text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-3">
              // INQUIRIES & COLLABORATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black dark:text-white leading-[1.1]">
              {isId
                ? 'MARI BERKOLABORASI & BANGUN SISTEM DIGITAL BERKUALITAS.'
                : "LET'S COLLABORATE & ENGINEER RELIABLE DIGITAL SYSTEMS."}
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <span className="block font-mono text-[11px] font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest mb-2">
              // {isId ? 'KETERSEDIAAN KOLABORASI' : 'COLLABORATION STATUS'}
            </span>
            <div className="p-5 rounded-3xl border border-neutral-200 dark:border-white/15 bg-neutral-50 dark:bg-[#0F0F11]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs font-bold uppercase text-black dark:text-white">
                  {isId ? 'TERSEDIA UNTUK KARYA & PROYEK' : 'AVAILABLE FOR PROJECTS'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {isId
                  ? 'Terbuka untuk pengembangan sistem web komersial, aplikasi rekapitulasi, maupun peluang magang software engineering.'
                  : 'Open for commercial web system development, data platforms, and software engineering internship opportunities.'}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Middle: Direct Email Banner */}
        <div className="py-12 sm:py-16 border-b border-neutral-200 dark:border-white/10">
          <span className="block font-mono text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-4">
            // {isId ? 'KIRIM SUREL LANGSUNG' : 'DIRECT EMAIL INQUIRY'}
          </span>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl border border-neutral-200 dark:border-white/15 bg-neutral-50 dark:bg-[#0F0F11]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-mono text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 uppercase">
                  {isId ? 'ALAMAT SUREL PRIBADI' : 'PRIMARY INBOX'}
                </span>
                <a
                  href={`mailto:${email}`}
                  className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-black dark:text-white font-mono hover:underline underline-offset-4 break-all"
                >
                  {email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Salin Alamat Email"
              className="inline-flex items-center justify-center gap-2 px-6 min-h-[44px] rounded-full border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity select-none self-start lg:self-auto cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                  <span>{isId ? 'TERSALIN KE PAPAN KLIP!' : 'COPIED TO CLIPBOARD!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{isId ? 'SALIN EMAIL' : 'COPY EMAIL'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3. Connected Contact Form with Idle, Loading, Error, and Success States (R-27) */}
        <div className="py-12 sm:py-16 border-b border-neutral-200 dark:border-white/10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest">
                // {isId ? 'KIRIM PESAN SINGKAT' : 'DIRECT MESSAGE FORM'}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-black dark:text-white mt-1">
                {isId ? 'Formulir Kontak Terhubung' : 'Connected Inquiry Form'}
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl border border-emerald-500/40 bg-emerald-50/60 dark:bg-emerald-950/20 text-center"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                <h4 className="font-display font-bold text-lg text-black dark:text-white">
                  {isId ? 'Pesan Berhasil Terkirim!' : 'Message Sent Successfully!'}
                </h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1 max-w-md mx-auto">
                  {isId
                    ? 'Terima kasih telah menghubungi. Pesan Anda telah diteruskan langsung ke kotak masuk email saya.'
                    : 'Thank you for reaching out. Your inquiry was delivered directly to my personal inbox.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 px-6 min-h-[44px] rounded-full border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase cursor-pointer"
                >
                  {isId ? 'Kirim Pesan Lain' : 'Send Another Message'}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      {isId ? 'Nama Lengkap' : 'Your Name'}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isId ? 'Nama Anda' : 'Your Name'}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-white/15 bg-white dark:bg-[#0F0F11] text-black dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 text-sm focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      {isId ? 'Alamat Email' : 'Email Address'}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-white/15 bg-white dark:bg-[#0F0F11] text-black dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 text-sm focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300 mb-1.5"
                  >
                    {isId ? 'Pesan atau Pertanyaan' : 'Message or Proposal'}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isId
                        ? 'Tulis detail kebutuhan proyek atau pertanyaan Anda di sini...'
                        : 'Drop your project details or inquiry here...'
                    }
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-white/15 bg-white dark:bg-[#0F0F11] text-black dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 text-sm focus:border-black dark:focus:border-white transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-xl border border-rose-500/40 bg-rose-50 dark:bg-rose-950/30 flex items-center gap-2.5 text-xs font-mono text-rose-700 dark:text-rose-300"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full min-h-[48px] rounded-full border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 select-none cursor-pointer"
                >
                  {isLoading ? (
                    <span>{isId ? 'SEDANG MENGIRIM PESAN...' : 'SENDING MESSAGE...'}</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{isId ? 'KIRIM PESAN KE EMAIL' : 'SEND MESSAGE TO INBOX'}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4. Bottom: 4-Column Archive Footer */}
        <div className="pt-12 sm:pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-mono text-xs">
          <div>
            <span className="block font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-3">
              // REPOSITORI
            </span>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-black dark:text-white hover:underline underline-offset-4"
            >
              <span>GitHub: @Prinaldi77</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
              {isId ? 'Arsip kode sumber & repositori publik.' : 'Public source code & active repositories.'}
            </p>
          </div>

          <div>
            <span className="block font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-3">
              // {isId ? 'JEJARING PROFESIONAL' : 'PROFESSIONAL NETWORK'}
            </span>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-black dark:text-white hover:underline underline-offset-4"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
              {isId ? 'Koneksi karier dan riwayat profesional.' : 'Professional networking and experience log.'}
            </p>
          </div>

          <div>
            <span className="block font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-3">
              // {isId ? 'DOKUMENTASI VISUAL' : 'VISUAL ARCHIVE'}
            </span>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-black dark:text-white hover:underline underline-offset-4"
            >
              <span>Instagram: @prnldiiii</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
              {isId ? 'Dokumentasi kegiatan kampus & HIMA TI.' : 'Campus activities & HIMA TI documentation.'}
            </p>
          </div>

          <div>
            <span className="block font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-3">
              // {isId ? 'DOMISILI & BASIS' : 'LOCATION & BASE'}
            </span>
            <div className="flex items-center gap-1.5 font-bold text-black dark:text-white">
              <MapPin className="w-3.5 h-3.5" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-600 dark:text-neutral-400 mt-1.5">
              <Clock className="w-3 h-3" />
              <span>Western Indonesia Time (GMT+7)</span>
            </div>
          </div>
        </div>

        {/* 5. Copyright Bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 select-none">
          <p>
            © 2026 MUHAMAD PRINALDI. {isId ? 'SELURUH HAK CIPTA DILINDUNGI.' : 'ALL RIGHTS RESERVED.'}
          </p>
          <span className="uppercase tracking-wider">
            OBSIDIAN EDITORIAL SHOWCASE // 2026
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
