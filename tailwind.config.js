module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       width: {
        '128': '32rem', // adds w-128
        '144': '36rem',
        '160': '40rem',
      },
    },
  },
  plugins: [],
}
