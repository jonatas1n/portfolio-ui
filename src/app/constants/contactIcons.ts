import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

const CONTACT_ICONS: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  mail: FaEnvelope,
};

export const getContactIcon = (icon: string): IconType =>
  CONTACT_ICONS[icon.toLowerCase()] ?? FaGlobe;
