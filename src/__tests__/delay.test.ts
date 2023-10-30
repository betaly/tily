import {delay} from '../delay';

describe('delay', () => {
  it('should delay for a given number of milliseconds', async () => {
    const now = Date.now();
    await delay(100);
    const diff = Date.now() - now;
    expect(diff).toBeGreaterThanOrEqual(100);
    expect(diff).toBeLessThan(150);
  });
});
