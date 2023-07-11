/**
 * @param input
 * Desc: Helper function to know if a string contains letters. Usefull to separate the logical between a name and an code.
 */
export const containsLetters = (input: string): boolean => {
  const letterRegex = /[a-zA-Z]/;

  return letterRegex.test(input);
};
