"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, SunDim, Sparkles } from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeProvider';

const THEME_META = [
  { id: 'dark', title: 'Dark', icon: Moon, colors: ['#0f172a', '#064e3b', '#0d3d2c'] },
  { id: 'midnight', title: 'Midnight', icon: Sparkles, colors: ['#0b1020', '#071229', '#00121a'] },
];

export default function ThemeWidget() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('pointerdown', onDoc);
    return () => document.removeEventListener('pointerdown', onDoc);
  }, []);

  return (
    <div ref={containerRef} className="fixed right-4 bottom-6 z-50">
      <div className="flex items-end flex-col gap-2">
        {/* Popover */}
        <div
          role="menu"
          aria-hidden={!open}
          className={`transform origin-bottom-right transition-all duration-300 ${open ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 pointer-events-none translate-y-2'}`}
        >
          <div className="w-56 bg-slate-900/95 backdrop-blur rounded-xl border border-white/8 p-3 shadow-lg">
            <div className="text-xs text-gray-300 mb-2">Theme</div>
            <div className="grid grid-cols-1 gap-2">
              {THEME_META.map((t) => {
                const Icon = t.icon;
                const active = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    aria-pressed={active}
                    className={`w-full flex items-center gap-3 p-2 rounded-md transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-1 ${active ? 'bg-white/5 ring-2 ring-offset-1 ring-green-400/30' : ''}`}
                  >
                    <div className="w-10 h-8 rounded-md overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full grid grid-cols-3">
                        {t.colors.map((c, i) => (
                          <div key={i} style={{ background: c }} />
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-white">{t.title}</div>
                      <div className="text-xs text-gray-400">{t.id}</div>
                    </div>
                    <div className="text-slate-300">
                      <Icon size={18} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floating button */}
        <button
          aria-label="Open theme switcher"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg flex items-center justify-center text-white hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          {/* active tiny swatch */}
          <div className="w-8 h-8 rounded-md overflow-hidden ring-1 ring-white/20">
            <div className="w-full h-full grid grid-cols-3">
              {(THEME_META.find((x) => x.id === theme)?.colors || ['#000']).map((c, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} style={{ background: c }} />
              ))}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
