
import Header from "@/components/Header";
import HeroSection from "@/app/_sections/HeroSection";
import SkillsSection from "@/app/_sections/SkillsSection";

export default function Home() {
  return (
      <div>
          <Header/>
          <section className="flex flex-col gap-12">
              <HeroSection/>
              <SkillsSection/>
          </section>

      </div>
  );
}
