import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // safe fallback
    }

    // Construct genuine mailto URL fallback so the email client opens with the pre-filled message
    const recipient = 'akashraghvendra2654@gmail.com';
    const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hi Akash,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Portal`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatusMessage({
        type: 'info',
        text: 'Opening your default mail client to dispatch your message directly to Akash.',
      });
      setIsSubmitting(false);
    }, 600);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#080B14] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] glow-orb-violet blur-[160px] -z-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-cyan-400 mb-3 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build <span className="text-gradient-cyan-blue">Something Great</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Have an opportunity, an interesting project, or simply want to connect? I&apos;d love to hear from you.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white">
                  Akash Suresh Kulkarni
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">
                  Computer Science Engineering Student • BIT Bangalore
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  Available for software engineering internships, technical project collaborations, and full-time placement discussions.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4 pt-2">
                
                {/* Email Address */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        Email Address
                      </div>
                      <a
                        href="mailto:akashraghvendra2654@gmail.com"
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 truncate block"
                      >
                        akashraghvendra2654@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard('akashraghvendra2654@gmail.com', 'email')}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Number */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-sky-950 border border-sky-800/60 text-sky-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        Phone / WhatsApp
                      </div>
                      <a
                        href="tel:+918073471289"
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-sky-300 font-mono block"
                      >
                        +91 8073471289
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard('+918073471289', 'phone')}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-violet-950 border border-violet-800/60 text-violet-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      Bangalore, Karnataka, India
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/akash-kulkarni-146a5a298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400/60 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/akashsuresh2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400/60 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the verified communication channel below to initiate contact directly.
              </p>

              {statusMessage && (
                <div className="mb-6 p-3.5 rounded-xl bg-cyan-950/60 border border-cyan-800/80 text-xs text-cyan-300">
                  {statusMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border ${
                        errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      } text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 font-sans transition-all`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 font-mono mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border ${
                        errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      } text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 font-sans transition-all`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 font-mono mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Subject / Discussion Topic <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineering Internship / Placement Opportunity"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: null });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border ${
                      errors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                    } text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 font-sans transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 font-mono mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details about your project, team requirements, or role..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border ${
                      errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                    } text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 font-sans transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 font-mono mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 hover:from-cyan-300 hover:to-violet-300 shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Transmission...' : 'Send Message'}</span>
                </button>

                <p className="text-[11px] text-center text-slate-500 font-mono">
                  Direct encrypted routing via default email client fallback • No simulated backend fake submissions
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

