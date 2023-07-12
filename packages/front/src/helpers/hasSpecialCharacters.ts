/**
 * @param postalCode
 * Desc: A helper function to know if the search term contains some special characters and prevent some bugs.
 */
export const hasSpecialCharacters = (str: string): boolean => {
  const specialChars = /[!@#$%^&*()=°,.;²\[\]?":{}|+_<>\/]|--|''/;
  return str === "'" || str === '-' || specialChars.test(str);
};
