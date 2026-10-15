import React, { useState } from 'react';
import type { PersonalInfo, SectionContent } from '../../types';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  personalInfo: PersonalInfo;
  header: SectionContent;
  labels: {
    locationLabel: string;
    emailLabel: string;
    formNameLabel: string;
    formEmailLabel: string;
    formMessageLabel: string;
    formSubmitButton: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
    formResetButton: string;
  };
}

export const Contact: React.FC<ContactProps> = ({
  personalInfo,
  header,
  labels,
}) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="portfolio-section bg-black text-white">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="text-center header-to-content">
          {header.eyebrow && (
            <p className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-[12px]">
              {header.eyebrow}
            </p>
          )}
          <h2 className="section-title text-white mb-[9px]">
            {header.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-[1.63]">
            {header.description}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Info Card */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-zinc-900 card-padding rounded-[30px] border border-zinc-800 space-y-4">
              <h3 className="font-bold text-base text-white pb-2 border-b border-zinc-800">
                {header.title}
              </h3>

              <div className="flex items-start gap-[7px] text-sm text-zinc-300">
                <Mail className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-xs text-white">{labels.emailLabel}</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-rose-400 underline underline-offset-2 break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-[7px] text-sm text-zinc-300">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-xs text-white">{labels.locationLabel}</div>
                  <div>{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-zinc-900 card-padding rounded-[30px] border border-zinc-800">
              {submitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white">
                    {labels.formSuccessTitle}
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-[1.63]">
                    {labels.formSuccessDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-5 py-2 text-xs font-bold text-white bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
                  >
                    {labels.formResetButton}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-zinc-300 mb-1"
                    >
                      {labels.formNameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[10px] border border-zinc-700 bg-zinc-800/80 text-white text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-zinc-300 mb-1"
                    >
                      {labels.formEmailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[10px] border border-zinc-700 bg-zinc-800/80 text-white text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-zinc-300 mb-1"
                    >
                      {labels.formMessageLabel}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[10px] border border-zinc-700 bg-zinc-800/80 text-white text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-[7px] px-6 py-3 rounded-full text-sm font-bold text-white bg-[#610000] hover:bg-[#4E0000] transition-colors shadow-soft"
                  >
                    <Send className="w-4 h-4" />
                    <span>{labels.formSubmitButton}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
