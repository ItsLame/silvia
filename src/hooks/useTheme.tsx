import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

enum Theme {
  System = "system",
  Light = "light",
  Dark = "dark",
}

interface IThemeContext {
  theme: Theme;
  handler: {
    toggle: () => void;
    system: () => void;
    light: () => void;
    dark: () => void;
  },
  status: {
    isSystem: boolean;
    isLight: boolean;
    isDark: boolean;
  }
}

const defaultTheme = Theme.System;

const ThemeProviderContext = createContext<IThemeContext|undefined>(undefined);
interface IThemeProvider {
  children: ReactNode;
}

/**
 * @deprecated Old implementation of theme provider/switcher.
 * Use themeAtom instead.
 */
const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  // note: use of `window` (i think?) in this provider might cause hydration issues, so need to be dynamically loaded when used
  const [theme, setTheme] = useState<Theme> (() => {
    if (typeof window === "undefined") return defaultTheme;
    return (localStorage.getItem("theme") as Theme) || defaultTheme;
  });

  useEffect(() => {
    if (theme !== localStorage.getItem("theme")) localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) =>
      prev === Theme.System ? Theme.Light
        : prev === Theme.Light ? Theme.Dark
          : prev === Theme.Dark ? Theme.System : Theme.Light,
    );
  };

  const handleSystemTheme = () => setTheme(Theme.System);
  const handleLightTheme = () => setTheme(Theme.Light);
  const handleDarkTheme = () => setTheme(Theme.Dark);

  const getTheme = () => {
    if (typeof window === "undefined" || theme !== Theme.System) return theme;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemDark ? Theme.Dark : Theme.Light;
  };

  const value = {
    theme: theme,
    handler: {
      toggle: handleToggleTheme,
      system: handleSystemTheme,
      light: handleLightTheme,
      dark: handleDarkTheme,
    },
    status: {
      isSystem: theme === Theme.System,
      isLight: theme === Theme.Light,
      isDark: theme === Theme.Dark,
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      <div className={`${getTheme()}`}>
        {children}
      </div>
    </ThemeProviderContext.Provider>
  );
};

/**
 * @deprecated Old implementation of theme provider/switcher.
 * Use themeAtom instead.
 */
const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context == null) throw new Error("useTheme must be used within ThemeProvider.");
  return context;
};

export {
  ThemeProvider,
  useTheme,
};
