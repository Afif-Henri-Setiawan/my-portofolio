"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MdOutlineArrowOutward, MdClose } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import BorderGlow from "../BorderGlow";

import vscodeImg from "@/assets/images/tools/vscode.png";
import reactImg from "@/assets/images/tools/reactjs.png";
import nextImg from "@/assets/images/tools/nextjs.png";
import tailwindImg from "@/assets/images/tools/tailwind.png";
import bootstrapImg from "@/assets/images/tools/bootstrap.png";
import jsImg from "@/assets/images/tools/js.png";
import nodeImg from "@/assets/images/tools/nodejs.png";
import githubImg from "@/assets/images/tools/github.png";
import aiImg from "@/assets/images/tools/ai.png";
import canvaImg from "@/assets/images/tools/canva.png";
import figmaImg from "@/assets/images/tools/figma.png";
import nestjsImg from "@/assets/images/tools/NestJS.svg";
import antigravityImg from "@/assets/images/tools/google.png";
import dummyProjectImg from "@/assets/images/foto.jpg"; // Placeholder image

const skillsData = [
  { name: "Visual Studio Code", category: "Code Editor", icon: vscodeImg },
  { name: "React JS", category: "Framework", icon: reactImg },
  { name: "Next JS", category: "Framework", icon: nextImg },
  { name: "Tailwind CSS", category: "Framework", icon: tailwindImg },
  { name: "Bootstrap", category: "Framework", icon: bootstrapImg },
  { name: "Javascript", category: "Language", icon: jsImg },
  { name: "Node JS", category: "Javascript Runtime", icon: nodeImg },
  { name: "Github", category: "Repository", icon: githubImg },
  { name: "Canva", category: "Design App", icon: canvaImg },
  { name: "Figma", category: "Design App", icon: figmaImg },
  { name: "Nest JS", category: "Framework", icon: nestjsImg },
  { name: "Antigravity", category: "AI Agent", icon: antigravityImg },
];

const projectsData = [
  {
    id: 1,
    title: "Web Portofolio",
    type: "Web App",
    shortDescription: "Website portofolio interaktif dengan desain glassmorphism.",
    longDescription: "Ini adalah website portofolio pribadi yang dibangun dengan Next.js dan Tailwind CSS. Desainnya mengusung tema dark mode dengan efek glassmorphism yang elegan. Website ini responsif dan interaktif, menampilkan profil, skill, dan project.",
    tech: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: dummyProjectImg,
  },
  {
    id: 2,
    title: "Aplikasi Kasir",
    type: "Desktop App",
    shortDescription: "Aplikasi kasir berbasis desktop untuk manajemen inventaris.",
    longDescription: "Aplikasi desktop kasir (Point of Sales) untuk mempermudah transaksi jual beli di toko. Fitur utamanya mencakup manajemen stok barang, pencetakan struk, serta laporan penjualan harian dan bulanan.",
    tech: ["C#", ".NET", "SQL Server"],
    githubUrl: "https://github.com",
    liveUrl: "", // Kosongkan jika tidak ada live demo
    image: dummyProjectImg,
  }
];

export default function Skills() {
  const [buttons, setButtons] = useState("project");
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <div id="projects" className="my-32 px-8 max-w-7xl mx-auto">
      <h1 className="text-6xl font-bold text-center mb-6">Portofolio</h1>
      <div className="flex justify-center items-center gap-4 mb-12">
        <Button
          type="button"
          onClick={() => setButtons("project")}
          className={`py-2 px-8 rounded-full ${buttons === "project" ? "bg-blue-600 hover:bg-blue-700 text-white" : "glass text-gray-400"} transition-all`}
        >
          My Project
        </Button>
        <Button
          type="button"
          onClick={() => setButtons("skills")}
          className={`py-2 px-8 rounded-full ${buttons === "skills" ? "bg-blue-600 hover:bg-blue-700 text-white" : "glass text-gray-400"} transition-all`}
        >
          Skills
        </Button>
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        {buttons === "skills" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillsData.map((skill, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl glass border border-white/10 hover:bg-white/5 transition-all cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/5 p-2">
                    <Image src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200 text-sm">{skill.name}</h3>
                    <p className="text-xs text-gray-400">{skill.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {buttons === "project" && (
          <div className="flex flex-wrap gap-6 justify-center items-stretch">
            {projectsData.map((project) => (
              <div key={project.id} className="w-96 rounded-xl flex">
                <BorderGlow
                  edgeSensitivity={30}
                  glowColor="40 80 80"
                  backgroundColor="0 0 0"
                  borderRadius={15}
                  className="shadow-lg w-full"
                  glowRadius={40}
                  glowIntensity={1}
                  coneSpread={25}
                  animated={true}
                  colors={["#c084fc", "#f472b6", "#38bdf8"]}
                >
                  <div className="p-5 h-full flex flex-col">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border border-white/10 mb-4">
                      <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] uppercase font-bold rounded-md tracking-wider">
                          {project.type}
                        </span>
                      </div>
                      <h4 className="font-bold text-2xl text-gray-100">{project.title}</h4>
                      <p className="text-gray-400 text-sm mt-2 mb-6 line-clamp-3">
                        {project.shortDescription}
                      </p>
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 3).map((t, i) => (
                            <p key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300 rounded-full">
                              {t}
                            </p>
                          ))}
                          {project.tech.length > 3 && (
                            <p className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-400 rounded-full">
                              +{project.tech.length - 3}
                            </p>
                          )}
                        </div>
                        <Button
                          onClick={() => setSelectedProject(project)}
                          className="w-full rounded-lg glass border border-white/15 hover:bg-white/10 text-gray-200 transition-all py-5"
                          variant={"default"}
                        >
                          Lihat Detail <MdOutlineArrowOutward className="ml-2 text-lg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors backdrop-blur-md"
            >
              <MdClose size={24} />
            </button>

            {/* Header Image */}
            <div className="relative w-full h-64 sm:h-80 border-b border-white/10">
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                layout="fill" 
                objectFit="cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs uppercase font-bold rounded-md tracking-wider backdrop-blur-md border border-blue-500/30">
                  {selectedProject.type}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-8">
              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Tentang Proyek</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Teknologi yang Digunakan</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4 border-t border-white/10 pt-8">
                {selectedProject.liveUrl && (
                  <Button
                    onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                    className="flex-1 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/20 border-none transition-all"
                  >
                    Live Demo <MdOutlineArrowOutward className="ml-2 text-xl" />
                  </Button>
                )}
                <Button
                  onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                  className={`py-6 rounded-xl glass border border-white/15 hover:bg-white/10 text-white transition-all ${selectedProject.liveUrl ? 'flex-1' : 'w-full'}`}
                >
                  <FaGithub className="mr-2 text-xl" /> Source Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
