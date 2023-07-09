export const isOverseasPostalCode = (postalCode: string): boolean => {
  const overseasPrefixes = ['971', '972', '973', '974', '976'];
  return overseasPrefixes.some((prefix) => postalCode.startsWith(prefix));
};
