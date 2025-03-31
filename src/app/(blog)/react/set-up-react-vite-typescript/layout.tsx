import type {Metadata} from "next";


export const metadata: Metadata = {
    title: {
        default: "Set Up React with Vite and TypeScript - Step-by-Step Guide",
        template: `%s | Thirdy Gayares`,
    },
    description: "Learn how to set up a React project using Vite and TypeScript in this step-by-step guide. Perfect for beginners and developers looking for a fast and efficient React setup.",
    keywords: [
        "React with Vite",
        "Vite TypeScript setup",
        "Install React with Vite",
        "React TypeScript tutorial",
        "Vite tutorial",
        "React beginner guide",
        "Thirdy Gayares",
        "React development",
        "JavaScript framework",
        "Vite vs Create React App",
        "Frontend development",
        "React setup guide",
        "Next.js developer",
        "Software Engineer Philippines",
    ],
    metadataBase: new URL("https://thirdygayares.com"),
    publisher: "Thirdy Gayares",
    icons: ["https://thirdygayares.com/image/thirdy.png"],
    authors: [
        { name: "Thirdy Gayares", url: "https://www.linkedin.com/in/thirdygayares/" },
    ],
    alternates: {
        canonical: "https://thirdygayares.com/react/set-up-react-vite-typescript",
    },
    openGraph: {
        title: "How to Set Up React with Vite and TypeScript - Full Guide",
        description: "Follow this step-by-step guide to install and set up a React project with Vite and TypeScript. Learn how to create a new project, install dependencies, and run your code efficiently.",
        url: "https://thirdygayares.com/react/set-up-react-vite-typescript",
        siteName: "Thirdy Gayares",
        images: [
            {
                url: "https://thirdygayares.com/image/blog/react/1-set-up-react-vite-typescript/thumbnail.png",
                width: 1200,
                height: 630,
                alt: "React Vite TypeScript Setup Guide",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        site: "@thirdygayares",
        title: "How to Set Up React with Vite and TypeScript",
        description: "Step-by-step tutorial on setting up a React project with Vite and TypeScript. Ideal for beginners and developers who want a fast setup.",
        images: ["https://thirdygayares.com/image/blog/react/1-set-up-react-vite-typescript/thumbnail.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function SetUpReactViteTypeScriptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>{children}
      </>
  );
}
