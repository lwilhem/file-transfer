import { PrismaClient } from "@prisma/client/edge"

export default defineEventHandler(async () => {
  const prisma = new PrismaClient({
    errorFormat: "pretty",
  })

  const data = await prisma.warframes.findMany({
    include: {
      Abilities: true,
    },
  })

  return {
    data,
  }
})
