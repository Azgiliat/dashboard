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
        'gray1': '#A5A5A5',
        'gray2': '#C2C2C2',
        'gray3': '#F5F5F5'
      },
      fontFamily: {
        primary: ['Cairo', 'sans'],
        secondary: 'Open Sans'
      }
    }
  }
};
