import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // This is the part that was missing!
      colors: {
        'workalign-dark': '#111827', // Dark background (Tailwind gray-900)
        'workalign-card': '#F8F7FF', // Your "beige" / light-violet white
        'workalign-primary': '#5B21B6', // Your "dark violet" (Tailwind violet-800)
        'workalign-primary-light': '#EDE9FE', // A lighter violet for highlights (violet-100)
        'workalign-text-primary': '#1F2937', // Main text color on light cards (gray-800)
        'workalign-text-secondary': '#6B7280', // Subdued text color (gray-500)
      },
      // You can also keep the default backgroundImage extension if you had it
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config