import { PrismaSeedSingleton, WarframeItemsSingleton } from "./utils"

const prisma = PrismaSeedSingleton()
const items = WarframeItemsSingleton(["Warframes"])

export default function SeedWarframeTable() {
}
