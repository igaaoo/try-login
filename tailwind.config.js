import { blackA, green, mauve, violet } from '@radix-ui/colors';

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    colors: {
      ...blackA,
      ...green,
      ...mauve,
      ...violet,
    },
  },
};
export const plugins = [];
