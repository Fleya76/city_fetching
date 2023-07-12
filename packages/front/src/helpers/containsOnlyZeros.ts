/**
 * @param postalCode
 * Desc: A helper function to know if the search term contains a sequence of 0 to prevent the parseInt with a multiple 0.
 */
export const containsOnlyZeros = (str: string): boolean => {
  const regex = /^0+$/;
  return regex.test(str);
};
