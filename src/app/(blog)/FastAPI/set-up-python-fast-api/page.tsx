"use client";

import Head from "next/head";
import BlogSuggestionComponent from "@/components/BlogSuggestionComponent";
import BlogContent from "@/app/(blog)/FastAPI/set-up-python-fast-api/blogContent";

export default function SetUpReactViteTypeScript() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "How to Build Your First FastAPI App – Step-by-Step",
        "description": "Learn from Thirdy Gayares how to build and run your first FastAPI app using Python. This beginner-friendly tutorial shows how to set up a virtual environment, install FastAPI and Uvicorn, and launch your API.",
        "url": "https://thirdygayares.com/FastAPI/set-up-python-fast-api",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://thirdygayares.com/FastAPI/set-up-python-fast-api"
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
        "image": "https://thirdygayares.com/FastAPI/set-up-python-fast-api"
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
                    <BlogSuggestionComponent link="https://github.com/thirdygayares/thirdy/discussions/14"/>
                </main>
            </div>
        </>
    );
}
