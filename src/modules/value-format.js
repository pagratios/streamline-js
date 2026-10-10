// Number helpers for the dashboard's value tiles. DOM-free so they can be tested.

// One − / + step, rounded to hundredths: in binary floating point 16.4 − 1 is 15.399999999999999, which the
// dose and drink tiles would show as it is.
export function stepValue(value, step, direction) {
    return Math.round((value + direction * step) * 100) / 100;
}

// The brew ratio to two decimals, so 41 g from 16.3 g reads 1:2.52 rather than 1:2.5. One decimal is kept when
// the second would be 0 (1:2.0, 1:2.5).
export function formatRatio(ratio) {
    const hundredths = Math.round(ratio * 100);
    return (hundredths / 100).toFixed(hundredths % 10 ? 2 : 1);
}
