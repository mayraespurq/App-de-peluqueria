// Primitives.jsx — shared atoms for Studio hair booking app

const PLACEHOLDER_BG = `repeating-linear-gradient(135deg,
  oklch(0.92 0.02 60) 0 8px,
  oklch(0.88 0.025 55) 8px 16px)`;

function Placeholder({ label, style = {}, dark = false, bgImage = null }) {
  return (
    <div style={{
      background: bgImage 
        ? `url('${bgImage}') center / cover no-repeat`
        : (dark ? `repeating-linear-gradient(135deg,
        oklch(0.32 0.015 55) 0 8px,
        oklch(0.28 0.015 55) 8px 16px)` : PLACEHOLDER_BG),
      display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
      padding: 10, boxSizing: 'border-box',
      fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
      fontSize: 9, letterSpacing: 0.3,
      color: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.45)',
      textTransform: 'uppercase',
      ...style,
    }}>{label}</div>
  );
}

// Minimal stroke icon system — 20px grid, 1.6 stroke
function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 1.6 }) {
  const props = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  const paths = {
    scissors: <><circle cx="6" cy="7" r="3"/><circle cx="6" cy="17" r="3"/><line x1="8.5" y1="8.5" x2="20" y2="20"/><line x1="8.5" y1="15.5" x2="20" y2="4"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><polyline points="12,7 12,12 15,14"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></>,
    home: <><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></>,
    search: <><circle cx="11" cy="11" r="7"/><line x1="16" y1="16" x2="21" y2="21"/></>,
    star: <polygon points="12,3 14.5,9 21,9.5 16,14 17.5,20.5 12,17 6.5,20.5 8,14 3,9.5 9.5,9"/>,
    heart: <path d="M12 21s-7-4.5-9-9c-1.5-3.5 1-7 4.5-7 2 0 3.5 1 4.5 2.5C13 6 14.5 5 16.5 5 20 5 22.5 8.5 21 12c-2 4.5-9 9-9 9z"/>,
    chevronRight: <polyline points="9,6 15,12 9,18"/>,
    chevronLeft: <polyline points="15,6 9,12 15,18"/>,
    chevronDown: <polyline points="6,9 12,15 18,9"/>,
    check: <polyline points="4,12 10,18 20,6"/>,
    checkCircle: <><circle cx="12" cy="12" r="9"/><polyline points="8,12 11,15 16,9"/></>,
    close: <><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    bell: <><path d="M6 9a6 6 0 1 1 12 0c0 6 2 8 2 8H4s2-2 2-8z"/><path d="M10 19a2 2 0 0 0 4 0"/></>,
    mapPin: <><path d="M12 22s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z"/><circle cx="12" cy="10" r="2.5"/></>,
    sparkle: <><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/><path d="M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/></>,
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3,7 12,13 21,7"/></>,
    lock: <><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
    apple: <path d="M17 12.5c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.7-1.7-3.3-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 6.9 1.2 9.1.8 1.1 1.7 2.3 3 2.2 1.2 0 1.6-.8 3.1-.8s1.9.8 3.1.8c1.3 0 2.1-1.1 2.9-2.2.9-1.2 1.3-2.5 1.3-2.5s-2.5-1-2.5-3.9zM15 5.5c.7-.8 1.1-2 1-3.1-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.8-1.4z" fill={color} stroke="none"/>,
    google: <><path d="M21 12a9 9 0 1 1-3-6.7" stroke={color}/></>,
    share: <><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><line x1="8" y1="11" x2="16" y2="7"/><line x1="8" y1="13" x2="16" y2="17"/></>,
    edit: <><path d="M4 20h4l10-10-4-4L4 16z"/><line x1="14" y1="6" x2="18" y2="10"/></>,
    arrowRight: <><line x1="4" y1="12" x2="20" y2="12"/><polyline points="14,6 20,12 14,18"/></>,
    cut: <><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="8" y1="8" x2="20" y2="20"/><line x1="8" y1="16" x2="14" y2="10"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></>,
    history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><polyline points="3,3 3,8 8,8"/><polyline points="12,8 12,12 15,14"/></>,
    cards: <><rect x="3" y="5" width="18" height="14" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    help: <><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4"/><circle cx="12" cy="17" r="0.5" fill={color}/></>,
    logout: <><path d="M15 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/><polyline points="10,8 4,12 10,16"/><line x1="4" y1="12" x2="15" y2="12"/></>,
  };
  return <svg {...props}>{paths[name]}</svg>;
}

// Pill button
function Button({ children, variant = 'primary', size = 'md', full = false, onClick, style = {}, accent = '#8A3B1F' }) {
  const sizes = {
    sm: { height: 36, font: 14, padX: 16 },
    md: { height: 52, font: 16, padX: 22 },
    lg: { height: 58, font: 17, padX: 26 },
  }[size];
  const variants = {
    primary: { bg: accent, color: '#fff', border: 'none' },
    dark: { bg: '#8A3B1F', color: '#fff', border: 'none' },
    ghost: { bg: 'transparent', color: '#1A1815', border: '1px solid rgba(0,0,0,0.12)' },
    light: { bg: 'rgba(0,0,0,0.05)', color: '#1A1815', border: 'none' },
  }[variant];
  return (
    <button onClick={onClick} style={{
      height: sizes.height, padding: `0 ${sizes.padX}px`,
      width: full ? '100%' : 'auto',
      borderRadius: 999, border: variants.border, cursor: 'pointer',
      background: variants.bg, color: variants.color,
      fontSize: sizes.font, fontWeight: 500, letterSpacing: -0.2,
      fontFamily: 'Inter, system-ui, sans-serif',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      transition: 'transform 0.15s, opacity 0.15s',
      ...style,
    }}>{children}</button>
  );
}

function Card({ children, style = {}, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: '#fff', borderRadius: 24,
      boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
      ...style,
    }}>{children}</div>
  );
}

// Avatar with initial & tint color
function Avatar({ name = '', size = 44, tint = '#E8DFD3', img }) {
  const initial = name.split(' ').map(n => n[0]).slice(0, 2).join('');
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: img ? PLACEHOLDER_BG : tint,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Fraunces, Georgia, serif',
      fontSize: size * 0.38, fontWeight: 500, color: '#1A1815',
      flexShrink: 0, overflow: 'hidden',
    }}>{!img && initial}</div>
  );
}

Object.assign(window, { Placeholder, Icon, Button, Card, Avatar, PLACEHOLDER_BG });
