import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mystical: {
          dark: '#0a0a0a',
          purple: '#6b21a8',
          gold: '#fbbf24',
          silver: '#e5e7eb',
        },
      },
      backgroundImage: {
        'gradient-mystical': 'linear-gradient(135deg, #6b21a8 0%, #1f2937 100%)',
      },
    },
  },
  plugins: [],
}
export default config
