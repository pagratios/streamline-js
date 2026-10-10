// Dose / drink tile numbers (src/modules/value-format.js).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { stepValue, formatRatio } from '../src/modules/value-format.js';

test('a − / + step leaves no floating-point noise', () => {
    assert.equal(stepValue(16.4, 1, -1), 15.4);
    assert.equal(stepValue(18.1, 0.1, 1), 18.2);
    assert.equal(stepValue(0.3, 0.1, -1), 0.2);
    assert.equal(stepValue(36, 1, 1), 37);
});

test('the ratio shows hundredths when it has them', () => {
    assert.equal(formatRatio(41 / 16.3), '2.52');
    assert.equal(formatRatio(2.51), '2.51');
    assert.equal(formatRatio(40 / 16), '2.5');
    assert.equal(formatRatio(36 / 18), '2.0');
    assert.equal(formatRatio(2.996), '3.0');
});
