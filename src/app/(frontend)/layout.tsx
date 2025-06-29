import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "@/hooks/Providers";

export const metadata: Metadata = {
  title: "Silvia Tan - Software Engineer",
  description: "Silvia is a full stack software engineer who likes to build user-friendly, accessible, and intuitive applications.",
  keywords: "Silvia, Silvia Silvia, Silvia Tan, Portfolio, Software Engineer, Full Stack, Startup, Web, Frontend",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <head>
        <title>{`${metadata.title}`}</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
