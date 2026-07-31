"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MdOutlineArrowOutward, MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md";
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
import project1Img from "@/assets/images/project/1.png";
import project2Img from "@/assets/images/project/2.png";
import project3Img from "@/assets/images/project/3.png";
import project4Img from "@/assets/images/project/4.png";
import project5Img from "@/assets/images/project/5.png";
import project6Img from "@/assets/images/project/6.png";

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
    title: "Sistem Pendaftaran PBB",
    type: "Web App",
    shortDescription: "Platform digital untuk pendaftaran Pajak Bumi dan Bangunan yang efisien.",
    longDescription: "Sistem informasi berbasis web yang dirancang untuk mempermudah dan mempercepat proses pendaftaran Pajak Bumi dan Bangunan (PBB) secara digital. Aplikasi ini meminimalisir proses manual, meningkatkan akurasi pendataan wajib pajak, serta menyederhanakan alur birokrasi pendaftaran.",
    tech: ["React JS", "Nest JS"],
    githubUrl: "",
    githubFrontend: "https://github.com/Hanunnisasalsabila/Magang_Bakeuda.git",
    githubBackend: "https://github.com/Hanunnisasalsabila/Magang_Bakeuda.git",
    liveUrl: "",
    image: project1Img,
  },
  {
    id: 2,
    title: "Sistem Management Laundry",
    type: "Web App",
    shortDescription: "Aplikasi manajemen operasional bisnis laundry terpadu dan efisien.",
    longDescription: "Platform manajemen komprehensif untuk mendukung operasional bisnis laundry. Sistem ini mencakup fitur pelacakan pesanan pelanggan, manajemen stok atau layanan, pencatatan transaksi, dan pelaporan keuangan untuk membantu pemilik usaha mengelola bisnis dengan lebih rapi.",
    tech: ["C#"],
    githubUrl: "",
    githubFrontend: "https://github.com/Afif-Henri-Setiawan/laundry-app.git",
    githubBackend: "https://github.com/Afif-Henri-Setiawan/laundry-app-api.git",
    liveUrl: "",
    image: project2Img,
  },
  {
    id: 3,
    title: "Aplikasi Penyedia Loker",
    type: "Mobile App",
    shortDescription: "Aplikasi pencarian kerja cerdas dengan fitur AI deskripsi otomatis.",
    longDescription: "Aplikasi mobile modern untuk mewadahi pencari kerja dan penyedia lowongan. Dilengkapi dengan inovasi fitur kecerdasan buatan (AI) yang dapat men-generate deskripsi pekerjaan secara otomatis, memudahkan perekrut dalam menyusun lowongan secara cepat dan profesional.",
    tech: ["Dart", "Flutter"],
    githubUrl: "",
    githubFrontend: "https://github.com/Afif-Henri-Setiawan/flutter_kerjain_app.git",
    githubBackend: "https://github.com/Afif-Henri-Setiawan/ApiKerjaIn.git",
    liveUrl: "",
    image: project3Img,
  },
  {
    id: 4,
    title: "Web Toko Kopi",
    type: "Web App",
    shortDescription: "Website interaktif untuk promosi dan katalog produk kedai kopi.",
    longDescription: "Website responsif untuk kedai kopi yang menampilkan berbagai katalog menu, lokasi, dan promosi menarik. Mengutamakan desain visual yang elegan dan pengalaman pengguna yang nyaman untuk menarik minat pelanggan.",
    tech: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/Afif-Henri-Setiawan/afifhnrstwn.github.io.git",
    githubFrontend: "",
    githubBackend: "",
    liveUrl: "https://afif-henri-setiawan.github.io/afifhnrstwn.github.io/",
    image: project4Img,
  },
  {
    id: 5,
    title: "Aplikasi Baca Novel",
    type: "Mobile App",
    shortDescription: "Platform mobile untuk mengeksplorasi dan membaca novel secara digital.",
    longDescription: "Aplikasi mobile yang menyajikan perpustakaan novel digital dengan antarmuka membaca yang nyaman. Pengguna dapat menelusuri berbagai genre cerita, menyimpan progres membaca, dan menikmati karya tulis favorit di mana saja dan kapan saja.",
    tech: ["Dart", "Flutter"],
    githubUrl: "",
    githubFrontend: "https://github.com/Afif-Henri-Setiawan/flutter_novela_app.git",
    githubBackend: "https://github.com/Afif-Henri-Setiawan/ApiNovelaApp.git",
    liveUrl: "",
    image: project5Img,
  },
  {
    id: 6,
    title: "Web Cuaca",
    type: "Web App",
    shortDescription: "Aplikasi pemantau informasi dan prakiraan cuaca secara real-time.",
    longDescription: "Aplikasi berbasis web untuk menyajikan informasi suhu dan prakiraan cuaca terkini berdasarkan lokasi tertentu. Dengan memanfaatkan integrasi API pihak ketiga, aplikasi ini memberikan data akurat serta visualisasi cuaca yang ramah pengguna.",
    tech: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/Afif-Henri-Setiawan/web_cuaca.git",
    githubFrontend: "",
    githubBackend: "",
    liveUrl: "https://afif-henri-setiawan.github.io/web_cuaca/",
    image: project6Img,
  }
];

export default function Skills() {
  const [buttons, setButtons] = useState("project");
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const projectsPerPage = 3;
  const totalProjectPages = Math.ceil(projectsData.length / projectsPerPage);
  const currentProjects = projectsData.slice((currentProjectPage - 1) * projectsPerPage, currentProjectPage * projectsPerPage);

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
          <div className="flex flex-col gap-8">
            <div key={currentProjectPage} className="flex flex-wrap gap-6 justify-center items-stretch animate-in fade-in zoom-in-95 duration-500">
              {currentProjects.map((project) => (
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
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 mb-4">
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
                        {/* <div className="flex flex-wrap gap-2 mb-4">
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
                        </div> */}
                        <Button
                          onClick={() => setSelectedProject(project)}
                          className="w-full rounded-lg glass border border-white/15 hover:bg-white/10 text-gray-200 transition-all py-5 cursor-pointer"
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
            
            {/* Pagination Controls */}
            {totalProjectPages > 1 && (
              <div className="flex justify-center items-center mt-4 gap-3">
                <button
                  onClick={() => setCurrentProjectPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentProjectPage === 1}
                  className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all"
                >
                  <MdChevronLeft className="text-2xl" />
                </button>
                
                <div className="flex gap-2 glass px-4 py-2 rounded-full border border-white/10">
                  {Array.from({ length: totalProjectPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProjectPage(index + 1)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-all duration-300 ${
                        currentProjectPage === index + 1 
                          ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-400" 
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentProjectPage(prev => Math.min(prev + 1, totalProjectPages))}
                  disabled={currentProjectPage === totalProjectPages}
                  className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all"
                >
                  <MdChevronRight className="text-2xl" />
                </button>
              </div>
            )}
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
            <div className="relative w-full aspect-[5/2] border-b border-white/10">
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
                {selectedProject.githubUrl && (
                  <Button
                    onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                    className={`py-6 rounded-xl glass border border-white/15 hover:bg-white/10 text-white transition-all flex-1`}
                  >
                    <FaGithub className="mr-2 text-xl" /> Source Code
                  </Button>
                )}
                {selectedProject.githubFrontend && (
                  <Button
                    onClick={() => window.open(selectedProject.githubFrontend, "_blank")}
                    className={`py-6 rounded-xl glass border border-white/15 hover:bg-white/10 text-white transition-all flex-1`}
                  >
                    <FaGithub className="mr-2 text-xl" /> FE Code
                  </Button>
                )}
                {selectedProject.githubBackend && (
                  <Button
                    onClick={() => window.open(selectedProject.githubBackend, "_blank")}
                    className={`py-6 rounded-xl glass border border-white/15 hover:bg-white/10 text-white transition-all flex-1`}
                  >
                    <FaGithub className="mr-2 text-xl" /> BE Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
