interface External {
  _key: string;
  _type: "external";
  url: string;
  label: string;
}

export interface Internal {
  _key: string;
  _type: "internal";
  label: string;
  slug: string;
  document: string;
}

export type Link = External | Internal | undefined;
