export const CONTACT_KINDS = ["link", "email"] as const;

export type ContactKind = (typeof CONTACT_KINDS)[number];

export type ContactResponse = {
  id: number;
  kind: string;
  icon: string;
  label: string;
  value: string;
  position: number;
};

export type Contact = {
  id: number;
  kind: ContactKind;
  icon: string;
  label: string;
  value: string;
  position: number;
};
