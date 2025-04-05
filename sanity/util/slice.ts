export const sliceTypeFromNames = (types: { name: string; title: string }[]) =>
  types?.map(({ name, title }) => ({ type: name, title }));
