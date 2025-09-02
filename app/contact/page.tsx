"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // this is the form
    const data = new FormData(form);

    setLoading(true);

    const res = await fetch("https://formspree.io/f/xgvllpya", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      setStatus("Message sent!");
      form.reset(); // ✅ safe now
    } else {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-900 p-8 rounded-xl shadow-xl w-96"
      >
        <input
          name="name"
          placeholder="Your Name"
          className="w-full p-2 rounded text-black"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded text-black"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-2 rounded text-black"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-6 py-2 rounded flex items-center justify-center gap-2 hover:scale-105 transition"
          disabled={loading}
        >
          {loading ? (
            <>
              Sending...
              <FaPaperPlane className="animate-pulse" />
            </>
          ) : (
            "Send"
          )}
        </button>
        {status && <p className="text-green-400">{status}</p>}
      </form>
    </section>
  );
}
