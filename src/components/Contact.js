"use client";
import { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate with email API / form handling service
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 md:px-8 py-16 max-w-6xl mx-auto flex flex-col items-center"
    >

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xl text-[#ebb2ff] font-medium mb-2">- Contact</p>
        <h2 className="text-4xl sm:text-5xl font-bold">Let’s Grow Your Business Together</h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Reach out via email, LinkedIn, WhatsApp, or simply fill the form below.
        </p>
      </div>

    {/* Contact Info */}
    <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 text-center md:text-left md:py-0.5 sm:px-0.5 py-0.5">
    <div className="flex flex-col items-center md:items-start">
  <a
    href="mailto:punitdm1@gmail.com"
    className="flex items-center gap-2 text-lg font-semibold text-[#f3cbff] hover:text-[#ebb2ff]"
  >
    <MdEmail className="text-[#ebb2ff] text-2xl" /> Email
  </a>
</div>

<div className="flex flex-col items-center md:items-start">
  <a
    href="https://www.linkedin.com/in/punit-chauhan-seo/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-lg font-semibold text-[#f3cbff] hover:text-[#ebb2ff]"
  >
    <FaLinkedin className="text-[#ebb2ff] text-2xl" /> Connect Now
  </a>
</div>

<div className="flex flex-col items-center md:items-start">
  <a
    href="https://wa.me/919871228046"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-lg font-semibold text-[#f3cbff] hover:text-[#ebb2ff]"
  >
    <FaWhatsapp className="text-[#ebb2ff] text-2xl" /> Chat Now
  </a>
</div>
    </div>
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-4 bg-[#4241427d] backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg"
      >
        {submitted && (
          <p className="text-green-400 font-semibold text-center">
            Thank you! I will get back to you soon.
          </p>
        )}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#2a1639] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#ebb2ff]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#2a1639] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#ebb2ff]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          className="p-3 rounded-lg bg-[#2a1639] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#ebb2ff]"
        ></textarea>
        <button
          type="submit"
          className="btn-gradient rounded-lg py-3 font-semibold text-lg mt-2"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
