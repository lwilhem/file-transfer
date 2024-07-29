import antfu from "@antfu/eslint-config"
import tailwindcss from "eslint-plugin-tailwindcss"

export default antfu({
  stylistic: {
    quotes: "double",
  },
  rules: {
    "no-console": "off",
  },
})
  .append([...tailwindcss.configs["flat/recommended"]])
  .overrideRules({
    "tailwindcss/no-custom-classname": "off",
  })
