import { PrismaClient } from "@prisma/client"
import Items, { type Category } from "warframe-items"

export function PrismaSeedSingleton() {
  return new PrismaClient()
}

export function WarframeItemsSingleton(category: Category[]) {
  return new Items({
    category,
    i18n: false,
    ignoreEnemies: true,
  })
}
