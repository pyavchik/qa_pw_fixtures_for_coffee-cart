/**
 * Returns formatted unit price x quantity string, e.g. "$10.00 x 1"
 */
export function unitPriceFormatStr(unitPrice, unitsNumber) {
  return `${priceFormatStr(unitPrice)} x ${unitsNumber}`;
}

/**
 * Returns formatted unit price string, e.g. "$10.00"
 */
export function priceFormatStr(unitPrice) {
  return `$${unitPrice.toFixed(2)}`;
}

/**
 * Returns formatted total price string, e.g. "Total: $10.00"
 */
export function totalPriceFormatStr(totalPrice) {
  return `Total: $${totalPrice.toFixed(2)}`;
}
