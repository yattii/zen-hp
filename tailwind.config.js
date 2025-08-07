// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
      },
      colors: {
        base: '#bbbabf',      // 薄いグレー（背景などに使う）
        primary: '#733e94',   // アクセントカラー（紫、ボタンやリンクなど）
        accent: '#a98ee8',    // より明るい紫（補助的に使いたい場合）
      },
    },
  },
  plugins: [],
}
