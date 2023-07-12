export const hasSpecialCharacters = (str: string): boolean => {
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
  return specialChars.test(str);
};
