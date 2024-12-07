export function parsePrice(price) {
    return parseFloat(price).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}
