/* eslint-env node */
module.exports = {
  safelist: [
    {
      pattern: /opacity-(\d{1,2}|100)/, // Safelist all opacity classes from 0 to 100
    },
  ],
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
