import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

enum Theme {
  System = "system",
  Light = "light",
  Dark = "dark",
}

const getSystemTheme = () => {
  if (typeof window === "undefined") return;

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return systemDark ? Theme.Dark : Theme.Light;
};

const localThemeAtom = atomWithStorage("theme", Theme.System);
const systemThemeAtom = atom(getSystemTheme());

// track the actual system theme and update on changes
systemThemeAtom.onMount = (set) => {
  if (typeof window === "undefined") return;

  const systemColorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
  const setSystemThemeAtom = () => set(getSystemTheme());

  systemColorSchemeMedia.addEventListener("change", setSystemThemeAtom);
  return () => systemColorSchemeMedia.removeEventListener("change", setSystemThemeAtom);
};

const themeAtom = atom(
  (get) => {
    const localTheme = get(localThemeAtom);
    const systemTheme = get(systemThemeAtom);
    const resolvedTheme = localTheme === Theme.System ? systemTheme : localTheme;

    return {
      theme: resolvedTheme,
      themeStatus: {
        isDark: localTheme === Theme.Dark,
        isLight: localTheme === Theme.Light,
        isSystem: localTheme === Theme.System,
      },
    };
  },
  (_get, set) => {
    set(localThemeAtom, (currTheme) => {
      switch (currTheme) {
      case Theme.System: return Theme.Light;
      case Theme.Light: return Theme.Dark;
      case Theme.Dark:
      default:
        return Theme.System;
      }
    });
  },
);

export {
  themeAtom,
};
