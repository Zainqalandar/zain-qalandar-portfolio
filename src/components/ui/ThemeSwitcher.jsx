"use client";
import { useState } from 'react';
import { useTheme } from '@/components/layout/ThemeProvider';
import { profile } from '@/data/profile';

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
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { themeSwitcher } = profile.ui;
  const options = themeSwitcher.options;

  const themeColors = Object.fromEntries(
    options.map((option) => [option.id, option.colors])
  );
  const activeOption = options.find((option) => option.id === theme);

  return (
    <div className={`relative ${className} select-none`}>
      {/* Desktop: inline picker */}
      <div className="hidden md:flex items-center gap-3">
        <div className="text-xs text-gray-300 mr-2">{themeSwitcher.label}</div>
        <div className="flex items-center gap-2 bg-black/10 p-2 rounded-xl border border-white/6 glass-effect">
          {options.map((t) => (
            <button
              key={t.id}
              aria-pressed={theme === t.id}
              onClick={() => setTheme(t.id)}
              className={`flex items-center gap-2 px-2 py-1 rounded-md hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-1 ${theme === t.id ? 'ring-2 ring-offset-1 ring-green-400/40' : ''}`}
              title={`${t.title}${themeSwitcher.titleSeparator}${t.hint}`}
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
          <span className="text-sm font-medium">{activeOption?.title || theme}</span>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-44 bg-slate-900/95 backdrop-blur rounded-xl border border-white/8 py-2 shadow-xl z-50">
            {options.map((t) => (
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
