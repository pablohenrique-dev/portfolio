import { About } from "./components/About/About";
import { CertificatesSection } from "./components/Certificate/CertificatesSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/Project/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <CertificatesSection />
      <About />
    </>
  );
}
