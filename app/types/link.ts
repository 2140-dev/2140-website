interface External {
  _key: string;
  _type: string;
  external: { _type?: string; label?: string; url?: string };
  type?: "external";
}

interface Internal {
  _key: string;
  _type: string;
  internal: { _type?: string; label?: string; url?: string };
  type?: "internal";
}

export type Link = External | Internal | undefined;
