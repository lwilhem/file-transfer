import process from "node:process"
import { PrismaClient } from "@prisma/client"
import Items, { type Category } from "warframe-items"

export function PrismaSingleton() {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  })
}

export function WarframesItemsSingleton(categories: Category[]) {
  return new Items({ category: categories })
}
