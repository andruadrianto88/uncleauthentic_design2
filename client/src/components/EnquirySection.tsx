/* ============================================================
   UNCLE AUTHENTIC — ENQUIRY SECTION
   Design: Compact, minimal, editorial. Muted background.
   Functionality: Assembles a mailto link on submit.
   ============================================================ */

import { useState } from "react";
import { Send, ChevronDown } from "lucide-react";

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:growiseuncle@gmail.com?subject=${encodeURIComponent(
      `${formData.subject} from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="enquire"
      className="bg-ua-cream/40 border-y border-ua-charcoal/5"
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      aria-label="Enquiry Form"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 fade-up">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="orange-rule w-8" />
                <span className="section-label !text-[0.6rem]">Get in Touch</span>
              </div>
              <h2
                className="font-display text-ua-charcoal"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  letterSpacing: "-0.01em",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                ENQUIRE WITH US.
              </h2>
            </div>
            <p
              className="font-body text-ua-charcoal/50 text-sm max-w-xs md:text-right"
              style={{ lineHeight: 1.6 }}
            >
              For catering, feedback, or general questions. We generally respond within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form 
            onSubmit={handleSubmit}
            className="space-y-4 fade-up delay-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/60 border border-ua-charcoal/10 px-5 py-3.5 font-body text-sm text-ua-charcoal focus:bg-white focus:border-ua-orange/40 outline-none transition-all rounded-sm placeholder:text-ua-charcoal/30"
              />

              {/* Email */}
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/60 border border-ua-charcoal/10 px-5 py-3.5 font-body text-sm text-ua-charcoal focus:bg-white focus:border-ua-orange/40 outline-none transition-all rounded-sm placeholder:text-ua-charcoal/30"
              />
            </div>

            {/* Subject */}
            <div className="relative">
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white/60 border border-ua-charcoal/10 px-5 py-3.5 font-body text-sm text-ua-charcoal focus:bg-white focus:border-ua-orange/40 outline-none transition-all rounded-sm appearance-none cursor-pointer"
              >
                <option value="General Enquiry">General Enquiry</option>
                <option value="Catering">Catering Services</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-ua-charcoal/30">
                <ChevronDown size={14} />
              </div>
            </div>

            {/* Message */}
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/60 border border-ua-charcoal/10 px-5 py-3.5 font-body text-sm text-ua-charcoal focus:bg-white focus:border-ua-orange/40 outline-none transition-all rounded-sm placeholder:text-ua-charcoal/30 resize-none"
            ></textarea>

            {/* Submit */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="btn-primary !px-10 !py-3 !text-[0.7rem] flex items-center gap-2"
              >
                <span>Send Message</span>
                <Send size={13} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
