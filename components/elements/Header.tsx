"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ProfileCard from "../ProfileCard";
import { Button } from "../ui/button";
import { GoDownload } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";
import ShinyText from "../ShinyText";
import foto from "@/assets/images/my.png";

export default function Header() {
  return (
    <header id="home" className="grid grid-cols-2 pt-10">
      <div>
        <div className="flex items-center gap-4 border border-white/10 glass py-2 px-4 w-1/2 rounded-2xl">
          <div className="rounded-full bg-amber-300 h-8 w-8"></div>
          <p>Hi, I&apos;m Afif Henri Setiawan</p>
        </div>
        <ShinyText
          className="text-white text-7xl font-bold mt-5 whitespace-pre-line"
          text={`Frontend\nDevelopment`}
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
        <div className="flex items-center gap-4  py-3 rounded-xl mt-5">
          <p>
            Membangun antarmuka web yang intuitif dan responsif bukan cuma soal
            kode bagi saya, tapi soal bagaimana menghidupkan visual di setiap
            layar. Fokus saya sederhana: membuat setiap klik terasa mulus dan
            menghadirkan pengalaman digital yang luar biasa untuk pengguna Anda.
          </p>
        </div>
        <div className="flex gap-4 mt-6">
          <Button className="glass py-6 px-10 rounded-xl cursor-pointer text-md border border-white/10 shadow-2xl">
            Download CV <GoDownload />
          </Button>
          <Button className="glass py-6 px-10 rounded-xl cursor-pointer text-md border border-white/10 shadow-2xl">
            Lihat Portofolio <MdOutlineArrowOutward />
          </Button>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <FaGithub className="text-3xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" />
          <FaLinkedin className="text-3xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" />
          <FaInstagram className="text-3xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-center">
        <ProfileCard
          name="Afif Henri Setiawan"
          title="Software Engineer"
          handle="Afifhnrstwn"
          status="Online"
          contactText="Contact Me"
          avatarUrl={foto.src}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          iconUrl="/assets/demo/iconpattern.png"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </div>
    </header>
  );
}
