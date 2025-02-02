import { IconType } from "react-icons";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BiSolidEnvelope } from "react-icons/bi";

interface Interface {
  icon?: IconType;
  size?: number;
  href: string;
}

function ContactIcon(attributes: Interface) {
  const Icon = attributes.icon;
  const size = attributes.size || 24;

  return (
    <a href={attributes.href} target="_blank">
      {Icon && <Icon size={size} />}
    </a>
  );
}

export default function SocialMedia() {
  return (
    <div className="flex gap-4 items-center">
      <ContactIcon icon={SiGithub} href="https://github.com/FrancoMartino/" />
      <ContactIcon
        icon={SiLinkedin}
        href="https://www.linkedin.com/in/francomartino/"
      />
      <ContactIcon
        size={28}
        icon={BiSolidEnvelope}
        href="mailto:info@martinofranco.com"
      />
    </div>
  );
}
