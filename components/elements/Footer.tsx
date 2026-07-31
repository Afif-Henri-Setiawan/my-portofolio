import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 mb-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo / Name */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Afif Henri Setiawan
            </h2>
            <p className="text-gray-400 text-sm mt-1 text-center md:text-left">
              Building digital products, brands, and experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white transition-all">
              <FaGithub size={18} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:border-blue-500/50 hover:text-white transition-all">
              <FaLinkedin size={18} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-pink-500 hover:border-pink-500/50 hover:text-white transition-all">
              <FaInstagram size={18} />
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Afif Henri Setiawan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
