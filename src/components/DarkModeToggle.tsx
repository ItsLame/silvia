"use client";

import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { useAtomValue, useSetAtom } from "jotai";
import { themeAtom } from "@/atoms/themeAtom";

const DarkModeToggle = () => {
  const themeStatus = useAtomValue(themeAtom).themeStatus;
  const toggleTheme = useSetAtom(themeAtom);

  return (
    <button className="rounded-full bg-red-800 dark:bg-red-950" onClick={toggleTheme}>
      <div className="p-2 rounded-full -translate-y-1 bg-red-200 dark:bg-red-900 text-red-600 dark:text-red-300 font-semibold active:translate-y-0 transition-all active:shadow-inner active:shadow-red-800 dark:active:shadow-black">
        {themeStatus.isDark && <IconMoon />}
        {themeStatus.isSystem && <IconDeviceDesktop />}
        {themeStatus.isLight && <IconSun />}
      </div>
    </button>
  );
};

export default DarkModeToggle;
