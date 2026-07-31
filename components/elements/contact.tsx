"use client";

import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
    console.log("Using Public Key:", publicKey);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        form.current,
        {
          publicKey: publicKey,
        }
      )
      .then(
        () => {
          setSuccessMessage("Pesan Anda berhasil dikirim! Saya akan segera merespons.");
          setIsSubmitting(false);
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setErrorMessage("Gagal mengirim pesan. Pastikan konfigurasi EmailJS sudah benar.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div id="contact" className="my-32">
      <h1 className="text-6xl font-bold text-center mb-16">Contact Me</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-8">
        {/* Contact Info */}
        <div className="flex flex-col gap-8 lg:pr-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Mari Berdiskusi</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Apakah Anda memiliki ide proyek, pertanyaan, atau hanya ingin menyapa? Saya selalu terbuka untuk berdiskusi tentang peluang baru dan kolaborasi yang menarik.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                <MdOutlineEmail size={26} />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="font-medium text-lg">afifhnristwn@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                <FiPhone size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Telepon</p>
                <p className="font-medium text-lg">+62 888 2587 292</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center text-pink-400">
                <MdOutlineLocationOn size={28} />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Lokasi</p>
                <p className="font-medium text-lg">Purbalingga, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Nama</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">Subjek</label>
              <input
                type="text"
                id="subject"
                name="title"
                required
                placeholder="Ide Proyek Baru"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Pesan</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Ceritakan tentang proyek Anda..."
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 mt-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white font-medium text-lg shadow-lg shadow-blue-500/20 border-none"
            >
              {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
            </Button>

            {successMessage && <p className="text-green-400 text-sm text-center mt-2 font-medium">{successMessage}</p>}
            {errorMessage && <p className="text-red-400 text-sm text-center mt-2 font-medium">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
