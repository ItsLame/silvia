"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useAtomValue } from "jotai";
import { themeAtom } from "@/atoms/themeAtom";

// note: dynamically load jotai provider so that theme atom won't flicker
const Provider = dynamic(() => import("jotai").then((e) => e.Provider), { ssr: false });

const Theme = ({ children }: {children: ReactNode}) => {
  const theme = useAtomValue(themeAtom).theme;

  return (
    <div className={`${theme}`}>
      {children}
    </div>
  );
};

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider>
      <Theme>
        {children}
      </Theme>
    </Provider>
  );
};

export default Providers;
