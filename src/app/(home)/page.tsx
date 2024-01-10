import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <section className="h-[100vh] w-full bg-white"></section>
    </>
  );
}
