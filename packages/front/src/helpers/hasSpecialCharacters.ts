export const hasSpecialCharacters = (str: string): boolean => {
  const specialChars = /[!@#$%^&*()=°,.;²\[\]?":{}|+_'<>\/]|--/;
  return specialChars.test(str);
};
