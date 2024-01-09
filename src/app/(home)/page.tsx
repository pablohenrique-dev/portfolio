import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="h-[100vh] w-full bg-gray-100"></section>
      <section className="h-[100vh] w-full bg-white"></section>
    </>
  );
}
