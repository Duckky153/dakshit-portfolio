export const theme = {
  colors: {
    background: '#0A0A0F',
    primary: '#00F5FF',    // Neon cyan
    secondary: '#FF00FF',  // Neon magenta
    accent: '#4D4DFF',     // Electric blue
    glass: 'rgba(255, 255, 255, 0.1)',
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3'
    }
  },
  fonts: {
    heading: '"Space Grotesk", sans-serif',
    body: '"Inter", sans-serif'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.6s ease',
    fast: '0.15s ease'
  },
  effects: {
    glow: (color: string) => `
      0 0 5px ${color},
      0 0 10px ${color},
      0 0 20px ${color}
    `,
    glass: `
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    `
  }
} as const

export type Theme = typeof theme