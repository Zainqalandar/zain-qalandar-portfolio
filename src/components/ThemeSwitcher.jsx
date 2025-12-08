"use client";
import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';

const THEME_META = [
  { id: 'dark', title: 'Dark', hint: 'Default' },
  { id: 'light', title: 'Light', hint: 'Bright' },
  { id: 'solar', title: 'Solar', hint: 'Warm' },
  { id: 'midnight', title: 'Midnight', hint: 'Violet' },
];

function Swatch({ colors = [], active }) {
  return (
    <div className={`w-10 h-10 rounded-lg overflow-hidden ring-1 ${active ? 'ring-offset-2 ring-white/20 shadow-lg scale-105' : 'ring-0'} transition-all`}> 
      <div className="w-full h-full grid grid-cols-3 grid-rows-1">
        {colors.map((c, i) => (
          <div key={i} style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}

export default function ThemeSwitcher({ className = '' }) {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);

  const themeColors = {
    dark: ['#0f172a', '#064e3b', '#0d3d2c'],
    light: ['#f8fafc', '#eef2ff', '#f0f9ff'],
    solar: ['#fff7ed', '#ffedd5', '#fff1e0'],
    midnight: ['#0b1020', '#071229', '#00121a'],
  };

  return (
    <div className={`relative ${className} select-none`}>
      {/* Desktop: inline picker */}
      <div className="hidden md:flex items-center gap-3">
        <div className="text-xs text-gray-300 mr-2">Theme</div>
        <div className="flex items-center gap-2 bg-black/10 p-2 rounded-xl border border-white/6 glass-effect">
          {THEME_META.map((t) => (
            <button
              key={t.id}
              aria-pressed={theme === t.id}
              onClick={() => setTheme(t.id)}
              className={`flex items-center gap-2 px-2 py-1 rounded-md hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-1 ${theme === t.id ? 'ring-2 ring-offset-1 ring-green-400/40' : ''}`}
              title={`${t.title} — ${t.hint}`}
            >
              <Swatch colors={themeColors[t.id]} active={theme === t.id} />
              <div className="text-left">
                <div className="text-sm font-medium text-white">{t.title}</div>
                <div className="text-[11px] text-gray-400">{t.hint}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: compact dropdown */}
      <div className="md:hidden">
        <button
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="flex items-center gap-2 p-2 rounded-lg bg-white/5 text-white hover:bg-white/8 transition"
        >
          <div className="w-8 h-8 rounded-md overflow-hidden">
            <div style={{ background: themeColors[theme]?.[0] || '#222' }} className="w-full h-full" />
          </div>
          <span className="text-sm font-medium">{theme?.charAt(0).toUpperCase() + theme?.slice(1)}</span>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-44 bg-slate-900/95 backdrop-blur rounded-xl border border-white/8 py-2 shadow-xl z-50">
            {THEME_META.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className={`w-full px-3 py-2 flex items-center gap-3 text-left hover:bg-white/5 transition-colors ${theme === t.id ? 'bg-white/5' : ''}`}
              >
                <div className="w-8 h-8 rounded-md overflow-hidden">
                  <div style={{ background: themeColors[t.id][0] }} className="w-full h-full" />
                </div>
                <div>
                  <div className="text-sm text-white font-medium">{t.title}</div>
                  <div className="text-xs text-gray-400">{t.hint}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
