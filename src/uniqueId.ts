let idCounter = 0;

/**
 * Generates a unique ID.
 *
 * @returns {number} Returns the unique ID.
 */
export const uniqueId = () => ++idCounter;
export default uniqueId;
