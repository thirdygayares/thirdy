import type {Metadata} from "next";


export const metadata: Metadata = {
    title: {
        default: "Set Up Python Fast API - Step-by-Step Guide",
        template: `%s | Thirdy Gayares`,
    },
    description: "Learn to build a FastAPI backend with Python. This guide walks you through the setup process from scratch.",
    keywords: [
        "FastAPI tutorial",
        "Python API development",
        "Thirdy Gayares",
        "Backend guide",
        "REST API setup",
        "FastAPI beginner",
        "Python developer",
        "Thirdy Gayares blog",
        "Software Engineer Philippines"
    ],
    metadataBase: new URL("https://thirdygayares.com"),
    publisher: "Thirdy Gayares",
    icons: ["https://thirdygayares.com/image/thirdy.png"],
    authors: [
        {name: "Thirdy Gayares", url: "https://www.linkedin.com/in/thirdygayares/"},
    ],
    alternates: {
        canonical: "https://thirdygayares.com/FastAPI/set-up-python-fast-api",
    },
    openGraph: {
        title: "Set Up Python FastAPI - Full Guide",
        description: "Step-by-step tutorial by Thirdy Gayares to help you set up FastAPI with Python easily. Perfect for beginners and backend developers.",
        url: "https://thirdygayares.com/FastAPI/set-up-python-fast-api",
        siteName: "Thirdy Gayares",
        images: [
            {
                url: "https://thirdygayares.com/FastAPI/set-up-python-fast-api",
                width: 1200,
                height: 630,
                alt: "FastAPI Setup Guide Thumbnail",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        site: "@thirdygayares",
        title: "Set Up Python FastAPI - Step-by-Step Guide",
        description: "Follow this easy FastAPI setup tutorial by Thirdy Gayares and build your first Python API quickly.",
        images: ["https://thirdygayares.com/image/blog/fastAPI/set-up-fastapi/thumbnail.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function SetUpFastAPILayout({
                                                           children,
                                                       }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>{children}
        </>
    );
}
