type Base64String = string;

export const Base64 = {
  encode: (raw: string): Base64String => Buffer.from(raw).toString("base64"),
  decode: (base64: Base64String) => Buffer.from(base64, "base64").toString(),
} as const;
