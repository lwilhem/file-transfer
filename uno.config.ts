import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"
import extractorSvelte from "@unocss/extractor-svelte"

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  extractors: [
    extractorSvelte(),
  ],
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        "display": "inline-block",
        "vertical-align": "middle",
      },
      collections: {
        mdi: () => import("@iconify-json/mdi/icons.json").then(i => i.default),
      },
    }),
    presetTypography(),
  ],
})
