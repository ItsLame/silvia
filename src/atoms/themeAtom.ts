import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

enum Theme {
  System = "system",
  Light = "light",
  Dark = "dark",
}

const localThemeAtom = atomWithStorage("theme", Theme.System);

const getTheme = (theme: Theme) => {
  if (typeof window === "undefined" || theme !== Theme.System) return theme;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return systemDark ? Theme.Dark : Theme.Light;
};

const themeAtom = atom(
  (get) => {
    return {
      theme: getTheme(get(localThemeAtom)),
      themeStatus: {
        isDark: get(localThemeAtom) === Theme.Dark,
        isLight: get(localThemeAtom) === Theme.Light,
        isSystem: get(localThemeAtom) === Theme.System,
      },
    }
  },
  (_get, set) => {
    set(localThemeAtom, (currTheme) => {
      switch (currTheme) {
        case Theme.System: return Theme.Light;
        case Theme.Light: return Theme.Dark
        case Theme.Dark:
        default:
          return Theme.System
      }
    })
  }
);

export {
  themeAtom
};