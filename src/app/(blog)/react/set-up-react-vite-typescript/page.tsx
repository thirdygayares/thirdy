import Head from "next/head";
import BlogContent from "@/app/(blog)/react/set-up-react-vite-typescript/blogContent";
import BlogSuggestionComponent from "@/components/BlogSuggestionComponent";

export default function SetUpReactViteTypeScript() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "How to Install and Set Up React with Vite and TypeScript (Step by Step)",
        "description": "Learn from Thirdy Gayares how to install and set up React with Vite and TypeScript. This step-by-step guide will help you create a fast and efficient React app using Vite.",
        "url": "https://thirdygayares.com/react/set-up-react-vite-typescript",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://thirdygayares.com/react/set-up-react-vite-typescript"
        },
        "author": {
            "@type": "Person",
            "name": "Thirdy Gayares",
            "url": "https://www.linkedin.com/in/thirdygayares/",
            "sameAs": [
                "https://github.com/thirdygayares",
                "https://twitter.com/thirdygayares",
                "https://thirdygayares.com"
            ]
        },
        "publisher": {
            "@type": "Organization",
            "name": "Thirdy Gayares",
            "logo": {
                "@type": "ImageObject",
                "url": "https://thirdygayares.com/image/thirdy.png"
            }
        },
        "datePublished": "2025-03-31T08:00:00+08:00",
        "dateModified": "2025-03-31T08:00:00+08:00",
        "image": "https://thirdygayares.com/image/blog/react/1-set-up-react-vite-typescript/thumbnail.png"
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

            <div className="bg-white">
                <main className="container m-auto">
                    <BlogContent/>
                    <BlogSuggestionComponent link="https://github.com/thirdygayares/thirdy/pull/12"/>
                </main>
            </div>
        </>
    );
}
