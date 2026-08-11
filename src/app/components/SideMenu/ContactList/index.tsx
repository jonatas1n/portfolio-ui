"use client";

import Link from "next/link";
import * as motion from "motion/react-client";
import { getContactIcon } from "@/constants";
import { useContacts } from "@/hooks/useContacts";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { formatCopy } from "@/i18n";
import { Contact } from "@/types";
import { copyToClipboard } from "@/utils/clipboard";

const CONTACT_ITEM_CLASS_NAME =
  "flex hover:bg-accent transition-all hover:text-light hover:scale-110 rounded-full bg-light text-dark p-1 w-full justify-center";

export const ContactList = () => {
  const { translation } = useLanguage();
  const { showToast } = useToast();
  const { data: contacts } = useContacts();

  const openEmail = async (contact: Contact) => {
    const isCopied = await copyToClipboard(contact.value);

    if (isCopied) {
      showToast(translation.contacts.emailCopied);
    }

    window.location.href = `mailto:${contact.value}`;
  };

  const renderContact = (contact: Contact) => {
    const Icon = getContactIcon(contact.icon);

    if (contact.kind === "email") {
      return (
        <button
          type="button"
          title={contact.label}
          aria-label={translation.contacts.copyEmail}
          onClick={() => {
            openEmail(contact);
          }}
          className={CONTACT_ITEM_CLASS_NAME}
        >
          <Icon fontSize={24} aria-hidden="true" />
        </button>
      );
    }

    return (
      <Link
        href={contact.value}
        target="_blank"
        rel="noopener noreferrer"
        title={contact.label}
        aria-label={formatCopy(translation.contacts.openLink, {
          contact: contact.label,
        })}
        className={CONTACT_ITEM_CLASS_NAME}
      >
        <Icon fontSize={24} aria-hidden="true" />
      </Link>
    );
  };

  if (contacts.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-5">
      <motion.p
        initial={{ opacity: 0, transform: "translateX(1rem)" }}
        animate={{ opacity: 1, transform: "translateX(0)" }}
        className="font-bold text-center"
      >
        {translation.menu.getInTouch}
      </motion.p>
      <ul className="flex justify-around gap-3 font-body">
        {contacts.map((contact, index) => (
          <motion.li
            key={contact.id}
            initial={{ opacity: 0, transform: "translateY(1.5rem)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ delay: 0.06125 * index }}
            className="flex w-full"
          >
            {renderContact(contact)}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
