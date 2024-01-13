import { CertificatesSection } from "./components/Certificate/CertificatesSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/Project/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <CertificatesSection />
      <section className="h-screen w-full"></section>
    </>
  );
}
