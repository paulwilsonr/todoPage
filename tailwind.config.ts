import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        greyedOut: 'rgba(123, 123, 123, 0.8)',
      },
    },
  },
  plugins: [],
} satisfies Config;
