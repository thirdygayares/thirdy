
import Header from "@/components/Header";
import HeroSection from "@/app/_sections/HeroSection";
import SkillsSection from "@/app/_sections/SkillsSection";
import ProjectsSection from "@/app/_sections/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div>
          <Header/>
          <section className="flex flex-col gap-12 lg:gap-20">
              <HeroSection/>
              <SkillsSection/>
              <ProjectsSection/>
              <Footer/>
          </section>

      </div>
  );
}
