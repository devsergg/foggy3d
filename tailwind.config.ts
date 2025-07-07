import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mollyjogger-inspired Color Palette - Earthy & Rustic
        primary: {
          50: '#F0F4F0',
          100: '#E1E9E1',
          200: '#C3D3C3',
          300: '#A5BDA5',
          400: '#87A787',
          500: '#2F5233', // Darker Earthy Green - Main brand color
          600: '#264428',
          700: '#1E361E',
          800: '#152814',
          900: '#0D1A0A',
        },
        secondary: {
          50: '#F7F5F3',
          100: '#EFEBE7',
          200: '#DFD7CF',
          300: '#CFC3B7',
          400: '#BFAF9F',
          500: '#A0522D', // Muted Terracotta - Accent color
          600: '#8A4625',
          700: '#74391D',
          800: '#5E2D15',
          900: '#48200D',
        },
        accent: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#38A169', // Success Green
          600: '#2F855A',
          700: '#276749',
          800: '#22543D',
          900: '#1A202C',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#D69E2E', // Warning Amber
          600: '#B7791F',
          700: '#975A16',
          800: '#78350F',
          900: '#451A03',
        },
        neutral: {
          50: '#F5F5DC', // Cream/Off-white - Main background
          100: '#F0F0E8',
          200: '#E8E8D8',
          300: '#D0D0C0',
          400: '#B8B8A8',
          500: '#8B8B7A',
          600: '#6B6B5A',
          700: '#3A473F', // Dark Brown/Green - Main text
          800: '#2A342B',
          900: '#1A241B',
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ['var(--font-merriweather)', 'Merriweather', 'Georgia', 'serif'],
        display: ['var(--font-playfair-display)', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
        body: ['var(--font-merriweather)', 'Merriweather', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right center'
          },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
        'colored': '0 4px 25px -5px rgba(255, 107, 53, 0.2), 0 10px 10px -5px rgba(255, 107, 53, 0.04)',
        'colored-lg': '0 10px 40px -10px rgba(255, 107, 53, 0.3), 0 2px 10px -2px rgba(255, 107, 53, 0.1)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 107, 53, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      backdropSaturate: {
        25: '.25',
        50: '.5',
        75: '.75',
        100: '1',
        125: '1.25',
        150: '1.5',
        200: '2',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};
export default config; 