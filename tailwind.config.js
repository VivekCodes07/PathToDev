/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#101B35',
          blue: '#3B82F6',
          'blue-hover': '#2563EB',
          'blue-light': '#F5F8FF',
          'blue-soft': '#EBF2FE',
          'blue-muted': '#DCE7FA',
          dark: '#17233C',
          muted: '#64748B',
          border: '#E2E8F0',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 27, 53, 0.05), 0 1px 2px 0 rgba(16, 27, 53, 0.03)',
        'premium': '0 10px 30px -5px rgba(16, 27, 53, 0.08), 0 4px 6px -2px rgba(16, 27, 53, 0.03)',
        'elevated': '0 20px 40px -15px rgba(16, 27, 53, 0.12), 0 0 0 1px rgba(16, 27, 53, 0.04)',
        'glow': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
      }
    },
  },
  plugins: [],
}
