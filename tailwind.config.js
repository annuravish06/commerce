import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        anu: {
          primary: '#8B5CF6',
          secondary: '#EC4899',
          accent: '#3B82F6',
          light: '#F5F3FF',
          dark: '#5B21B6',
        },
      },
      animation: {
        'gradient-x': 'gradientX 6s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'shine': 'shine 4s linear infinite',
      },
      backdropBlur: {
        sm: '4px',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shine: {
          '0%': { 'background-position': '0%' },
          '100%': { 'background-position': '200%' },
        },
      },
      backgroundImage: {
        'anu-gradient': 'linear-gradient(to right, #8B5CF6, #EC4899, #3B82F6)',
        'anu-gradient-light': 'linear-gradient(to right, #F5F3FF, #FDF2F8, #EFF6FF)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
});