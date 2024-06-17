import antfu from "@antfu/eslint-config"

export default antfu({
  svelte: true,
  stylistic: {
    quotes: "double",
    semi: false,
  },
})
