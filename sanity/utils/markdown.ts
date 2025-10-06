export const stripHTMLMarkup = (str: string) => {
  return str.replace(/<[^>]*>/g, '')
}
