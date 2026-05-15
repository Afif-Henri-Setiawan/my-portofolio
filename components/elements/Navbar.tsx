"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar normal */}
      <nav className="px-6 py-4 flex items-center justify-between glass my-8 rounded-2xl max-w-7xl mx-auto">
        <div>
          <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
        </div>

        <ul className="flex space-x-10 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Project</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Floating navbar */}
      <nav
        className={`
          fixed top-4 left-1/2 -translate-x-1/2
          z-50
          px-8 py-4
          rounded-2xl
          glass
          transition-all duration-300
          ${
            showFloating
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }
        `}
      >
        <ul className="flex gap-6 text-white text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Project</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
