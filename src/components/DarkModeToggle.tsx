import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@/hooks/useTheme";

const DarkModeToggle = () => {
  const { handler: themeHandler, status: themeStatus } = useTheme();

  const toggleTheme = () => {
    // document.documentElement.classList.toggle("dark",);
    themeHandler.toggle();
  };

  return (
    <button className="rounded-full bg-red-800" onClick={toggleTheme}>
      <div className="px-4 py-2 rounded-full -translate-y-1 bg-red-200 text-red-600 font-semibold active:translate-y-0 transition-all active:shadow-inner active:shadow-red-800">
        {themeStatus.isDark && <IconDeviceDesktop />}
        {themeStatus.isSystem && <IconSun />}
        {themeStatus.isLight && <IconMoon />}
      </div>
    </button>
  );
};

export default DarkModeToggle;
