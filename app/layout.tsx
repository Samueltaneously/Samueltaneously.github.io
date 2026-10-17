import type { Metadata } from "next";
    import "./globals.css";

    export const metadata: Metadata = {
      title: "Samuel Nelson — Software Engineer",
      description:
        "Portfolio of Samuel Nelson, a software engineer building thoughtful software for the web.",
      keywords: [
        "software engineer",
        "developer",
        "portfolio",
        "TypeScript",
        "React",
        "Next.js"
      ]
    };

    export default function RootLayout({
      children
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return (
        <html lang="en">
          <body>{children}</body>
        </html>
      );
    }
