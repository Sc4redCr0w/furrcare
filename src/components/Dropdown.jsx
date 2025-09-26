import React, { useEffect, useRef, useState } from 'react';

// Reusable dropdown with rounded menu and options
export default function Dropdown({
  value,
  onChange,
  options,
  placeholder = 'Select…',
  className = '',
  buttonClassName = '',
  menuClassName = ''
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  const current = options.find(o => o.value === value) || null;

  useEffect(() => {
    const onDocClick = (e) => {
      if (!btnRef.current || !menuRef.current) return;
      if (btnRef.current.contains(e.target) || menuRef.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  useEffect(() => {
    if (!open) {
      setActiveIndex(-1);
    }
  }, [open]);

  const handleKeyDown = (e) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setOpen(true);
      setActiveIndex(0);
      return;
    }
    if (!open) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      btnRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(options.length - 1, i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const opt = options[activeIndex];
      if (opt) {
        onChange?.(opt.value);
        setOpen(false);
        btnRef.current?.focus();
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        ref={btnRef}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        onKeyDown={handleKeyDown}
        className={`flex items-center justify-between gap-2 bg-gray-800 border border-white/30 rounded-2xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors min-w-44 ${buttonClassName}`}
      >
        <span className={current ? '' : 'text-white/60'}>
          {current ? current.label : placeholder}
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          ref={menuRef}
          tabIndex={-1}
          className={`absolute z-50 mt-2 max-h-64 overflow-auto no-scrollbar bg-gray-900 text-white border border-white/20 shadow-xl rounded-2xl p-1 w-full ${menuClassName}`}
        >
          {options.map((opt, idx) => {
            const selected = value === opt.value;
            const active = idx === activeIndex;
            return (
              <li
                key={opt.value ?? idx}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseDown={(e) => { // use mousedown to fire before blur
                  e.preventDefault();
                  onChange?.(opt.value);
                  setOpen(false);
                }}
                className={`cursor-pointer select-none px-3 py-2 rounded-xl transition-colors ${
                  active ? 'bg-white/10' : 'hover:bg-white/5'
                } ${selected ? 'text-orange-400' : ''}`}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
