import Lanyard from "../Lanyard";
import Image from "next/image";
import amikomLogo from "@/assets/images/amikom.png";
import smkLogo from "@/assets/images/smk.png";
export default function AboutUs() {
  return (
    <div id="about" className="flex flex-col lg:grid lg:grid-cols-3 mt-20 md:mt-32 border border-gray-300 rounded-lg p-4 md:px-8 gap-8 w-full h-auto lg:h-[620px] relative z-0 overflow-hidden">
      <div className="flex flex-col mt-4 md:mt-10 w-full lg:col-span-2">
        <h1 className="text-3xl font-bold mb-2">Tentang Saya</h1>
        <div className="flex flex-col gap-4 mt-2">
          <p>
            Halo, saya Afif Henri Setiawan, seorang Frontend Developer yang saat ini sedang menempuh studi
            Informatika di Universitas Amikom Purwokerto. Bagi saya, coding
            bukan sekadar menyusun sintaks, melainkan seni membangun solusi
            digital yang bermakna. Dalam keseharian, saya banyak mengeksplorasi
            ekosistem Next.js dan TypeScript untuk menciptakan aplikasi web yang
            skalabel, serta mengandalkan Flutter untuk menghadirkan pengalaman
            mobile application yang mulus dan modern.
          </p>
          <p>
            Fokus saya adalah menciptakan antarmuka yang tidak hanya estetik,
            tetapi juga intuitif dan responsif. Saya percaya bahwa pengalaman
            digital yang luar biasa lahir dari keseimbangan antara desain yang
            presisi dan performa kode yang optimal.
          </p>
          <p>
            Selain aspek teknis, saya sangat mengutamakan komunikasi yang
            efektif dan kolaborasi tim dalam setiap proyek. Sebagai seorang
            mahasiswa sekaligus pengembang, saya terbiasa melakukan manajemen
            waktu dengan baik dan memiliki kemauan belajar yang tinggi untuk
            beradaptasi dengan tren teknologi yang cepat berubah.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl md:text-2xl font-semibold">Pendidikan</h2>
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mt-2">
            <div className="border border-gray-300 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <Image src={amikomLogo} alt="Amikom Purwokerto" className="w-12 h-12 object-contain" />
              <div>
                <p>Universitas Amikom Purwokerto</p>
                <p>Informatika</p>
                <p>2023 - Sekarang</p>
              </div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <Image src={smkLogo} alt="SMK N 1 Kutasari" className="w-12 h-12 object-contain" />
              <div>
                <p>SMK N 1 Kutasari</p>
                <p>Teknik Jaringan & Komputer</p>
                <p>2020 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] lg:h-auto">
        <Lanyard position={[0, 0, 22]} gravity={[0, -30, 0]} />
      </div>
    </div>
  );
}
