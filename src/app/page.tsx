import Footer from "@/components/Home/Footer";
import Graph from "@/components/Home/Graph";
import Homebar from "@/components/Home/Homebar";
import ProjectSection from "@/components/Home/ProjectSection";
import { MarqueeDemo } from "@/components/Home/RevueSection";


export default function Home() {
  
  return (
    <div className="w-full h-full md:px-4 px-0 ">
      <Homebar />
      <MarqueeDemo />
      <Graph />
      <ProjectSection />
      <Footer />

    </div>
  );
}
