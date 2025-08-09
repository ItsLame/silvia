import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { useAtomValue, useSetAtom } from "jotai";
import { themeAtom } from "@/atoms/themeAtom";

const DarkModeToggle = () => {
  const themeStatus = useAtomValue(themeAtom).themeStatus;
  const toggleTheme = useSetAtom(themeAtom);

  return (
    <button className="rounded-full bg-red-800" onClick={toggleTheme}>
      <div className="px-4 py-2 rounded-full -translate-y-1 bg-red-200 text-red-600 font-semibold active:translate-y-0 transition-all active:shadow-inner active:shadow-red-800">
        {themeStatus.isDark && <IconMoon />}
        {themeStatus.isSystem && <IconDeviceDesktop />}
        {themeStatus.isLight && <IconSun />}
      </div>
    </button>
  );
};

export default DarkModeToggle;
