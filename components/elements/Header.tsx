"use client";

import ProfileCard from "../ProfileCard";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="grid grid-cols-2 pt-10">
      <div>
        <div className="flex items-center gap-4 border border-white/10 glass py-2 px-4 w-1/3 rounded-2xl">
          <div className="rounded-full bg-amber-300 h-8 w-8"></div>
          <p>hello world</p>
        </div>
        <h1 className="text-white text-7xl font-bold ">
          FrontEnd <br /> Development
        </h1>
        <div className="flex items-center gap-4 border border-white/10 glass py-2 px-4 w-1/3 rounded-2xl mt-5">
          <p>Afif Henri Setiawan</p>
        </div>
        <div className="flex gap-4">
          <Button className="glass mt-10 py-6 px-10 rounded-xl cursor-pointer text-md border border-white/10 shadow-2xl">
            Download CV
          </Button>
          <Button className="glass mt-10 py-6 px-10 rounded-xl cursor-pointer text-md border border-white/10 shadow-2xl">
            Lihat Portofolio
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <ProfileCard
          name="Afif Henri Setiawan"
          title="Software Engineer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/path/to/avatar.jpg"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          iconUrl="/assets/demo/iconpattern.png"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </div>
    </header>
  );
}
