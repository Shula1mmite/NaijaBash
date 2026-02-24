import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email us",
      details: "hello@naijabash.com",
      link: "mailto:hello@naijabash.com",
      color: "#e73768",
    },
    {
      icon: FaPhone,
      title: "Call us",
      details: "+234 (0) 123 456 7890",
      link: "tel:+2341234567890",
      color: "#69e0f9",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit us",
      details: "Lagos, Nigeria",
      link: "#",
      color: "#000000",
    },
  ];

  const socialLinks = [
    { icon: FaTwitter, name: "Twitter", link: "#", color: "#1DA1F2" },
    { icon: FaInstagram, name: "Instagram", link: "#", color: "#E4405F" },
    { icon: FaFacebook, name: "Facebook", link: "#", color: "#1877F2" },
    { icon: FaLinkedin, name: "LinkedIn", link: "#", color: "#0A66C2" },
  ];

  const faqs = [
    {
      question: "How do I list my event?",
      answer:
        "Create a free account, go to 'Host Event,' and fill in the details. Your event goes live after a quick review.",
    },
    {
      question: "Is NaijaBash free to use?",
      answer:
        "Yes! Browsing and RSVPing to events is completely free. Event organizers can choose between free and premium listing options.",
    },
    {
      question: "Can I attend events as an international visitor?",
      answer:
        "Absolutely! NaijaBash is designed for both locals and international visitors looking to experience authentic Nigerian celebrations.",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* CONTACT FORM + RIGHT SIDE */}
      <section className="py-28 bg-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FORM */}
            <div className="bg-white p-10 rounded-3xl border border-black/10 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-black/20 focus:border-[#e73768] focus:outline-none transition"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-lg border border-black/20 focus:border-[#e73768] focus:outline-none transition"
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-black/20 focus:border-[#e73768] focus:outline-none transition"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-lg border border-black/20 focus:border-[#e73768] focus:outline-none transition resize-none"
                />

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#e73768] text-white font-semibold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <FaPaperPlane size={18} />
                  Send message
                </button>
              </form>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-10">
              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-extrabold mb-6">Quick answers</h3>

                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl border border-black/10 bg-white mb-4"
                  >
                    <h4 className="font-bold mb-2">{faq.question}</h4>
                    <p className="text-black/60 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* SOCIAL */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#e73768]/5 to-[#69e0f9]/5 border border-black/10">
                <h3 className="text-xl font-bold mb-4">Follow us</h3>

                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center hover:scale-110 transition"
                        aria-label={social.name}
                      >
                        <Icon size={20} color={social.color} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to discover your next celebration?
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/events"
              className="px-10 py-4 bg-[#e73768] text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Explore events
            </Link>

            <Link
              to="/auth"
              className="px-10 py-4 border border-black/20 font-semibold rounded-md hover:border-[#69e0f9] transition"
            >
              Create account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
