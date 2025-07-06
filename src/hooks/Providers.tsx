"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

// note: dynamically load custom themeprovider to avoid hydration warnings
const ThemeProvider = dynamic(() => import("./useTheme").then((e) => e.ThemeProvider), { ssr: false });

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
