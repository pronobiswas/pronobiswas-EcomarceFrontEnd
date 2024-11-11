/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Sada: "var(--Sada)",
        Dhusor: "var(--Dhusor)",
        AbchaSada: "var(--AbchaSada)",
        AbchaSada1: "var(--AbchaSada1)",
        SadaLekhoni: "var(--SadaLekhoni)",
        DhusorLekhoni: "var(--DhusorLekhoni)",
        Secondary2: "var(--Secondary2)",
        kolapata: "var(--kolapata)",
        Botam2: "var(--Botam2)",
        BotamHover: "var(--BotamHover)",
        HoverBotam: "var(--HoverBotam)",
        Swoccho: "var(--Swoccho)",
      },
    },
    fontFamily: {
      popins: "var(--AKShor)",
      inter: "var(--AKShor2)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0px",
        // sm: '1rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
