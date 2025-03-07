'use client'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header className="bg-[#f6f2ea] text-center py-20 px-6 font-serif">
        <h1 className="text-5xl font-bold text-[#512260]">Contact Us</h1>
        <p className="mt-4 text-[#382a40] text-lg max-w-3xl mx-auto">
          We would love to hear from you! Please fill out the form below, and we'll get in touch as soon as possible.
        </p>
        <p className="mt-4 text-[#382a40] text-sm">
          Please note that all comments submitted through this form are anonymous.
        </p>
      </header>

      {/* Contact Form */}
      <section className="bg-white py-16 px-6 font-serif">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#382a40] text-lg">Your Name (Optional)</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-[#c5aded] rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-[#382a40] text-lg">Your Email (Optional)</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-[#c5aded] rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-[#382a40] text-lg">Your Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-[#c5aded] rounded-lg"
                rows={6}
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-[#512260] text-white rounded-lg hover:bg-[#c5aded]"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="mt-6 text-[#512260]">
              <p>Thank you for contacting us! We'll get back to you soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Alternative Contact Option (mailto) */}
      <section className="bg-white py-16 px-6 font-serif">
        <div className="text-center">
          <p className="text-[#382a40] text-lg">
            Alternatively, you can reach us by sending an email directly to{" "}
            <a href="mailto:theteammaibel@gmail.com" className="text-[#512260] hover:text-[#c5aded]">
              theteammaibel@gmail.com
            </a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
