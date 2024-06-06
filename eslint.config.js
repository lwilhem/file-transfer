import antfu from "@antfu/eslint-config"

export default antfu({
  svelte: true,
  unocss: true,
  stylistic: {
    quotes: "double",
    semi: false,
  },
  rules: {
    "no-console": "off",
  },
})
