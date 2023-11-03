import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        greyedOut: 'rgba(123, 123, 123, 0.8)',
      },
    },
  },
  plugins: [],
} satisfies Config;
