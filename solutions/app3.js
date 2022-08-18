const customDateFormats = (d) => ({
  short: d.toLocaleString('hu', { dateStyle: 'medium', timeStyle: 'short' }),
  long: d.toLocaleString('hu', { dateStyle: 'long', timeStyle: 'medium' }),
});

export default customDateFormats;
