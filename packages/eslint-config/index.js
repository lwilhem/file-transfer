import antfu from "@antfu/eslint-config"

export default function eslint_filetransfer() {
  const config = antfu({
    svelte: true,
    stylistic: {
      quotes: "double",
      semi: false,
    },
    formatters: {
      html: true,
      css: true,
      markdown: "prettier",
    },
    rules: {
      "no-console": "off",
    },
    gitignore: [
      "./.gitignore",
      "../.gitignore",
      "../../.gitignore",
    ],
  })

  return config
}
