"use client";

import Head from "next/head";
import BlogContent from "@/app/(blog)/react/set-up-react-vite-typescript/blogContent";

export default function SetUpReactViteTypeScript() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": " How to Install and Set Up React with Vite and TypeScript (Step by Step) by Thirdy Gayares",
        "description": "Learn From Thirdy Gayares how to install and set up React with Vite and TypeScript. This guide will walk you through the step-by-step process to create a fast and efficient React app using Vite.",
        "url": "https://thirdygayares.com",
        "author": {
            "@type": "Person",
            "name": "Thirdy Gayares",
            "url": "https://www.linkedin.com/in/thirdygayares/",
        },
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

            <div className=" bg-white ">
                <main>
                    <BlogContent/>
                </main>
            </div>
        </>
    );
}
