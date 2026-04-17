export function generateSKU(categoryCode: string, productName: string): string {
  const category = categoryCode.toUpperCase().slice(0, 3)
  const name = productName.toUpperCase().replace(/\s+/g, '').slice(0, 4)
  const random = Math.floor(1000 + Math.random() * 9000)
  return `${category}-${name}-${random}`
}
