import Header from "@/components/Header";
import HeroSection from "@/app/_homesections/HeroSection";
import SkillsSection from "@/app/_homesections/SkillsSection";
import ProjectsSection from "@/app/_homesections/ProjectsSection";
import Footer from "@/components/Footer";
import Head from "next/head";
import { projects } from "@/data/project";

export default function Home() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Thirdy Gayares - Software Engineer in the Philippines",
        "description": "Explore the projects and portfolio of Thirdy Gayares, showcasing expertise in mobile apps, backend systems, and web development.",
        "url": "https://thirdygayares.com",
        "author": {
            "@type": "Person",
            "name": "Thirdy Gayares",
            "url": "https://www.linkedin.com/in/thirdygayares/",
        },
        "projects": projects.map((project) => ({
            "@type": "CreativeWork",
            "name": project.name,
            "description": project.description,
            "image": `https://thirdygayares.com/image/project-cover/${project.image}`,
            "url": "https://thirdygayares.com/#project",
        })),
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </Head>

            <Header />
            <main>
                <article className="flex flex-col gap-12 lg:gap-20">
                    <HeroSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <Footer />
                </article>
            </main>
        </>
    );
}
