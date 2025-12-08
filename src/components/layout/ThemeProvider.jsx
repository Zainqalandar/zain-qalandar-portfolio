"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const THEMES = ['dark', 'light', 'solar', 'midnight'];
const STORAGE_KEY = 'site-theme';

const ThemeContext = createContext({ theme: 'dark', setTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(null);

  useEffect(() => {
    // Determine initial theme: localStorage -> system -> default
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      let initial = saved;
      if (!initial) {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        initial = prefersDark ? 'dark' : 'light';
      }
      if (!THEMES.includes(initial)) initial = 'dark';
      setThemeState(initial);
      applyTheme(initial);
    } catch (e) {
      // ignore in SSR or privacy-restricted contexts
      setThemeState('dark');
      applyTheme('dark');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function applyTheme(t) {
    const el = document.documentElement;
    THEMES.forEach((tm) => el.classList.remove(`theme-${tm}`));
    el.classList.add(`theme-${t}`);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch (e) {
      /* ignore */
    }

    // Update meta theme-color for mobile browsers
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      if (t === 'light') meta.content = '#f8fafc';
      else if (t === 'solar') meta.content = '#fff7ed';
      else if (t === 'midnight') meta.content = '#0b1020';
      else meta.content = '#0f172a';
    }

    // Accessibility hook
    el.setAttribute('data-theme', t);
  }

  function setTheme(t) {
    if (!THEMES.includes(t)) return;
    setThemeState(t);
    applyTheme(t);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}
