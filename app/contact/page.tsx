"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);

    const res = await fetch("https://formspree.io/f/xgvllpya", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      setStatus("✅ Message sent!");
      form.reset();
    } else {
      setStatus("❌ Something went wrong. Try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-900 p-8 rounded-lg border border-gray-700 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-pink-500 mb-4">Get in Touch</h2>

        <input
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          rows={4}
          required
        />

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-pink-600 hover:bg-pink-500 transition text-white font-semibold"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
          <FaPaperPlane className={loading ? "animate-pulse" : ""} />
        </button>

        {status && <p className="text-sm text-gray-300">{status}</p>}
      </form>
    </section>
  );
}
