// formatCurrency.test.js
const formatCurrency = require('./formatCurrency');

describe('formatCurrency', () => {
  test('deve formatar valores positivos corretamente', () => {
    expect(formatCurrency(12345)).toBe('R$ 123,45');
  });

  test('deve formatar valores negativos corretamente', () => {
    expect(formatCurrency(-9876)).toBe('-R$ 98,76');
  });

  test('deve formatar valores grandes corretamente', () => {
    expect(formatCurrency(123456789)).toBe('R$ 1.234.567,88');
  });

  test('deve formatar zero corretamente', () => {
    expect(formatCurrency(0)).toBe('R$ 0,00');
  });
});
