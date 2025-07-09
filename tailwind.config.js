/** @type {import('tailwindcss').Config} */

import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
}
