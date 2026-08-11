import { Contact, CONTACT_KINDS, ContactKind } from "../types";
import { makePath } from "./utils";

export const CONTACTS_ROUTE = "contacts";

export const makeContactsPath = () => makePath(`${CONTACTS_ROUTE}/`);

const isContactKind = (value: unknown): value is ContactKind =>
  typeof value === "string" && CONTACT_KINDS.includes(value as ContactKind);

const isFilledString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const toFiniteNumber = (value: unknown, fallback: number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const toContact = (raw: unknown, index: number): Contact | null => {
  if (typeof raw !== "object" || raw === null) {
    return null;
  }

  const { id, kind, icon, label, value, position } = raw as Record<
    string,
    unknown
  >;

  if (!isContactKind(kind) || !isFilledString(value) || !isFilledString(label)) {
    return null;
  }

  return {
    id: toFiniteNumber(id, index),
    kind,
    icon: isFilledString(icon) ? icon : "",
    label,
    value,
    position: toFiniteNumber(position, index),
  };
};

const byPosition = (first: Contact, second: Contact) =>
  first.position - second.position;

export const getContacts = async (url: string): Promise<Contact[]> => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return [];
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
      return [];
    }

    return data
      .map(toContact)
      .filter((contact): contact is Contact => contact !== null)
      .sort(byPosition);
  } catch (error) {
    console.error("Error fetching the contacts", error);
    return [];
  }
};
