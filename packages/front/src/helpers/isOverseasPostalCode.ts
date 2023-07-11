/**
 * @param postalCode
 * Desc: A helper function to know if the postal code is related to a overseas city.
 */
export const isOverseasPostalCode = (postalCode: string): boolean => {
  const overseasPrefixes = ['971', '972', '973', '974', '976'];
  return overseasPrefixes.some((prefix) => postalCode.startsWith(prefix));
};
