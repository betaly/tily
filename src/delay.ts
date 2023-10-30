/**
 * Delay for a given number of milliseconds.
 *
 * @param ms - The number of milliseconds to delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
