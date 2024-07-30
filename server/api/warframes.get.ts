import Items from "warframe-items"

export default defineEventHandler((e) => {
  const items = new Items({
    category: ["Warframes"],
    i18n: false,
    ignoreEnemies: true,
  })

  return {
    warframes: items,
    method: e.method,
  }
})
