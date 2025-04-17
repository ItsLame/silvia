import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Silvia Tan - Software Engineer",
  description: "Silvia is a full stack software engineer who likes to build user-friendly, accessible, and intuitive applications.",
  keywords: "Silvia, Silvia Silvia, Silvia Tan, Portfolio, Software Engineer, Full Stack, Startup, Web, Frontend",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png"/>
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
