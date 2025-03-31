import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Silvia - Software Engineer",
  description: "Silvia's Portfolio - Full Stack Software Engineer",
  keywords: "Silvia, Silvia Silvia, Silvia Tan, Portfolio, Software Engineer, Full Stack, Startup, Web, Frontend",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="light">
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
