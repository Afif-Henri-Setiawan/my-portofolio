import AboutUs from "@/components/elements/AboutUs";
import Header from "@/components/elements/Header";
import Navbar from "@/components/elements/Navbar";
import Skills from "@/components/elements/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Skills />
    </div>
  );
}
