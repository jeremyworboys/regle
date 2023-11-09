import { decimal } from '../decimal';

describe('decimal validator', () => {
  it('should validate undefined', () => {
    expect(decimal.exec(undefined)).toBe(true);
  });

  it('should validate null', () => {
    expect(decimal.exec(null)).toBe(true);
  });

  it('should validate empty string', () => {
    expect(decimal.exec('')).toBe(true);
  });

  it('should validate numbers', () => {
    expect(decimal.exec('01234')).toBe(true);
  });

  it('should not validate space', () => {
    expect(decimal.exec(' ')).toBe(false);
  });

  it('should not validate english letters', () => {
    expect(decimal.exec('abcdefghijklmnopqrstuvwxyz')).toBe(false);
  });

  it('should not validate english letters uppercase', () => {
    expect(decimal.exec('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(false);
  });

  it('should not validate alphanum', () => {
    expect(decimal.exec('abc123')).toBe(false);
  });

  it('should not validate padded letters', () => {
    expect(decimal.exec(' 123 ')).toBe(false);
  });

  it('should not validate unicode', () => {
    expect(decimal.exec('🎉')).toBe(false);
  });

  it('should validate negative numbers', () => {
    expect(decimal.exec('-123')).toBe(true);
  });

  it('should validate decimal numbers', () => {
    expect(decimal.exec('0.1')).toBe(true);
    expect(decimal.exec('1.0')).toBe(true);
  });

  it('should validate negative decimal numbers', () => {
    expect(decimal.exec('-123.4')).toBe(true);
  });

  it('should not validate multiple decimal points', () => {
    expect(decimal.exec('-123.4.')).toBe(false);
    expect(decimal.exec('..')).toBe(false);
  });

  it('should validate decimal numbers without leading digits', () => {
    expect(decimal.exec('.1')).toBe(true);
  });

  it('should not validate decimal numbers without trailing digits', () => {
    expect(decimal.exec('1.')).toBe(false);
  });
});
