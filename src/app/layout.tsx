import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Analytics} from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Thirdy Gayares - Software Engineer in the Philippines",
        template: `%s | Thirdy Gayares`,
    },
    description: "Hi, my real name is Jose Gayares III. I'm a Filipino Software Engineer specializing in backend systems, mobile app development, and SEO experimentation. Explore my projects including Nexus App, HWORK App, HTeams, and more.",
    keywords: [
        "Thirdy Gayares",
        "Software Engineer Philippines",
        "Front-end Engineer in the Philippines",
        "Filipino Developer",
        "Jose Gayares III",
        "Jose Gayares",
        "Thirdy",
        "Nexus App",
        "HWORK App",
        "Aistilo",
        "HTeams",
        "Herons Library App",
        "FeelinPinas",
        "Adroit App",
        "JavaCinno",
        "SEO Philippines",
        "Hackathon Projects",
        "University of Makati",
        "Computer Science Student",
        "Computer Science Student in the Philippines",
        "Umak Graduate Student",
        "Junior Front-End Developer at Labrador Company",
        "co-founder and Director for Technology at HWORK.ph",
        "Flask Developer",
        "React Developer",
        "Next Js Developer",
        "Part Time Instructor",
    ],
    metadataBase: new URL("https://thirdygayares.com"),
    publisher: 'ThirdyGayares',
    icons: ["https://thirdygayares.com/image/thirdy.png"],
    authors: [
        { name: 'Thirdy Gayares', url: 'https://www.linkedin.com/in/thirdygayares/' },
    ],
    alternates: {
        canonical: 'https://thirdygayares.com',
    },
    openGraph: {
        title: 'Thirdy Gayares - Software Engineer in the Philippines',
        description: 'Explore the work of Thirdy Gayares, including projects like Nexus App, HWORK App, HTeams, and more. A passionate Software Engineer from the Philippines.',
        url: 'https://thirdygayares.com',
        siteName: 'Thirdy Gayares',
        images: [
            {
                url: 'https://thirdygayares.com/thirdygayares-software-engineer.jpg',
                width: 1200,
                height: 630,
                alt: 'Thirdy Gayares - Software Engineer in the Philippines',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@thirdygayares',
        title: 'Thirdy Gayares - Software Engineer in the Philippines',
        description: 'Hi, I’m Thirdy Gayares, a Software Engineer from the Philippines. Discover my projects and expertise in backend systems, mobile apps, and more.',
        images: ['https://thirdygayares.com/thirdygayares-software-engineer.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">

      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {children}
      <Analytics/>
      </body>
      </html>
  );
}
