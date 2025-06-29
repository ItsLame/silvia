"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "./useTheme";

const Providers = ({ children }: {children:ReactNode}) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
