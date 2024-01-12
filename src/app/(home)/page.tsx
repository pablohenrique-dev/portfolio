import { CertificatesSection } from "./components/CertificatesSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <CertificatesSection />
      <section className="w-full h-screen"></section>
    </>
  );
}
