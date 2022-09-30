export const removeInvalidLocale = (str: string) =>
  str.includes('.') ? '' : str
