import type { Config } from "tailwindcss"

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, ui-sans-serif, system-ui, -apple-system, Arial, Roboto, sans-serif",
      },
    },
  },
}
