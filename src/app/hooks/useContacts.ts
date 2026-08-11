"use client";

import useSWR from "swr";
import { getContacts, makeContactsPath } from "@/services";
import { Contact } from "@/types";

export const useContacts = () => {
  const { data, error, isLoading } = useSWR<Contact[]>(
    makeContactsPath(),
    getContacts
  );

  return { data: data ?? [], error, isLoading };
};
