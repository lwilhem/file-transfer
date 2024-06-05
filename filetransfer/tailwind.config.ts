import type { Config } from "tailwindcss"
import {iconsPlugin, dynamicIconsPlugin} from "@egoist/tailwindcss-icons"
import { getIconCollections } from "@egoist/tailwindcss-icons"

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['mdi'])
    })
  ],
} satisfies Config
