let compareLocale = (a: string, b: string): any =>
  a.replace(/[^a-z]/gi, '').localeCompare(b.replace(/[^a-z]/gi, ''), 'en', { numeric: true });

export { compareLocale };
