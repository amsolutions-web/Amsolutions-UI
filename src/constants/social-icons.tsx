import { IconType } from "react-icons";
import { AiFillDiscord } from "react-icons/ai";
import { PiXLogoFill } from "react-icons/pi";
import { ImMail4 } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";

export type SocialIcon = {
  icon: IconType;
  href: string;
  label: string;
};

export const SocialIcons: SocialIcon[] = [
  {
    icon: AiFillDiscord,
    href: "https://discord.com/amsolutions",
    label: "Discord",
  },
  {
    icon: PiXLogoFill,
    href: "https://x.com/Alexey48110005",
    label: "X (Twitter)",
  },
  {
    icon: ImMail4,
    href: "latflat@gmail.com",
    label: "Email",
  },
  {
    icon: FaTelegramPlane,
    href: "https://t.me/AlekseyRiga",
    label: "Telegram",
  },
];
