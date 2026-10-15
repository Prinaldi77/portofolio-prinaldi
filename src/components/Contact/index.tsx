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
        setErrorMessage(result.message || (isId ? 'Gagal mengirim pesan. Silakan coba lagi.' : 'Failed to send message. Please try again.'));
      }
    } catch {
      setErrorMessage(isId ? 'Terjadi kendala jaringan. Silakan hubungi langsung ke email.' : 'Network error. Please email directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Kontak dan Footer"
      className="py-16 sm:py-24 bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="08"
          totalSections="08"
          title={isId ? 'KONTAK & PENUTUP' : 'CONTACT & FOOTER'}
          className="mb-10 sm:mb-14"
        />

        {/* 1. Atas: 2 Kolom (Inquiries Heading & Availability Status) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pb-12 sm:pb-16 border-b border-gray-200 dark:border-neutral-800">
          <div className="lg:col-span-7">
            <span className="block font-mono text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
              // INQUIRIES & COLLABORATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white font-sans leading-[1.15]">
              {isId
                ? 'MARI BERKOLABORASI & BANGUN SISTEM DIGITAL BERKUALITAS.'
                : "LET'S COLLABORATE & BUILD HIGH-INTEGRITY WEB SYSTEMS."}
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <span className="block font-mono text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-2">
              // {isId ? 'KETERSEDIAAN KOLABORASI' : 'COLLABORATION STATUS'}
            </span>
            <div className="p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-none" />
                <span className="font-mono text-xs font-bold uppercase text-black dark:text-white">
                  {isId ? 'TERSEDIA UNTUK KARYA & PROYEK' : 'AVAILABLE FOR PROJECTS'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {isId
                  ? 'Terbuka untuk rekayasa web skala komersial, freelance sistem rekapitulasi, maupun peluang magang di bidang software engineering.'
                  : 'Open for commercial web engineering, freelance data systems, and software engineering internship opportunities.'}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Tengah: Kirim Surel Langsung (Email Raksasa & Tombol Salin) */}
        <div className="py-12 sm:py-16 border-b border-gray-200 dark:border-neutral-800">
          <span className="block font-mono text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-4">
            // {isId ? 'KIRIM SUREL LANGSUNG' : 'DIRECT EMAIL INQUIRY'}
          </span>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-mono text-[11px] text-neutral-400 uppercase">
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

            {/* Salin Email Button with feedback */}
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Salin Alamat Email"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all select-none self-start lg:self-auto shadow-sm"
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

        {/* 3. Formulir Interaktif Web3Forms */}
        <div className="py-12 sm:py-16 border-b border-gray-200 dark:border-neutral-800">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest">
                // {isId ? 'KIRIM PESAN SINGKAT' : 'LEAVE A QUICK MESSAGE'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mt-1">
                {isId ? 'Formulir Kontak Terhubung' : 'Connected Contact Form'}
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 text-center"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                <h4 className="font-bold text-lg text-black dark:text-white">
                  {isId ? 'Pesan Berhasil Terkirim!' : 'Message Sent Successfully!'}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-md mx-auto">
                  {isId
                    ? 'Terima kasih telah menghubungi. Pesan Anda langsung diteruskan ke kotak masuk email saya.'
                    : 'Thank you for reaching out. Your inquiry was delivered directly to my personal inbox.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 px-5 py-2 rounded-lg border border-black dark:border-white font-mono text-xs font-bold uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  {isId ? 'Kirim Pesan Lain' : 'Send Another Message'}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-neutral-500 dark:text-neutral-400 mb-1.5">
                      {isId ? 'Nama Lengkap' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isId ? 'Nama Anda' : 'Your name'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-black dark:text-white text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-neutral-500 dark:text-neutral-400 mb-1.5">
                      {isId ? 'Alamat Email' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-black dark:text-white text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-neutral-500 dark:text-neutral-400 mb-1.5">
                    {isId ? 'Pesan atau Pertanyaan' : 'Message or Proposal'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isId ? 'Jelaskan detail proyek atau pertanyaan Anda...' : 'Describe your project or inquiry...'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-black dark:text-white text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs font-mono text-rose-500 mt-1">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 select-none"
                >
                  {isLoading ? (
                    <span>{isId ? 'MENGIRIM PESAN...' : 'SENDING MESSAGE...'}</span>
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

        {/* 4. Bawah: Footer 4 Kolom */}
        <div className="pt-12 sm:pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-mono text-xs">
          {/* Kolom 1: REPOSITORI */}
          <div>
            <span className="block font-bold text-neutral-400 uppercase tracking-widest mb-3">
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
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5 leading-relaxed">
              {isId ? 'Arsip proyek open-source & eksperimen kode.' : 'Open source codebase & active experiments.'}
            </p>
          </div>

          {/* Kolom 2: JEJARING PROFESIONAL */}
          <div>
            <span className="block font-bold text-neutral-400 uppercase tracking-widest mb-3">
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
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5 leading-relaxed">
              {isId ? 'Koneksi karier dan riwayat profesional.' : 'Professional networking and experience log.'}
            </p>
          </div>

          {/* Kolom 3: DOKUMENTASI VISUAL */}
          <div>
            <span className="block font-bold text-neutral-400 uppercase tracking-widest mb-3">
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
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5 leading-relaxed">
              {isId ? 'Dokumentasi kegiatan dan karya kreatif.' : 'Campus documentation and creative outputs.'}
            </p>
          </div>

          {/* Kolom 4: DOMISILI & BASIS */}
          <div>
            <span className="block font-bold text-neutral-400 uppercase tracking-widest mb-3">
              // {isId ? 'DOMISILI & BASIS' : 'LOCATION & BASE'}
            </span>
            <div className="flex items-center gap-1.5 font-bold text-black dark:text-white">
              <MapPin className="w-3.5 h-3.5" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5">
              <Clock className="w-3 h-3" />
              <span>Western Indonesia Time (GMT+7)</span>
            </div>
          </div>
        </div>

        {/* 5. Copyright Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-neutral-400 select-none">
          <p>
            © {new Date().getFullYear()} MUHAMAD PRINALDI. {isId ? 'SELURUH HAK CIPTA DILINDUNGI.' : 'ALL RIGHTS RESERVED.'}
          </p>
          <span className="uppercase tracking-wider">
            EDITORIAL MINIMALIST MONOCHROME // 2026
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
