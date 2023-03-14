module.exports = {
  content: ["index.html", "./src/**/*.{css,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#6418C3',
        secondary: '#5ECFFF',
        accent: '#E328AF',
        fine: '#38E25D',
        error: '#FF4A55',
        warning: '#FFAB2D',
        'gray2': '#C2C2C2'
      },
      fontFamily: {
        primary: ['Cairo', 'sans'],
        secondary: 'Open Sans'
      }
    }
  }
};
