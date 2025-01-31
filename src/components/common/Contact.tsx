import { IconType } from "react-icons";

interface Interface {
  icon?: IconType;
  size?: number;
  href: string;
}

export default function ContactIcon(attributes: Interface) {
  const Icon = attributes.icon;
  const size = attributes.size || 24;

  return (
    <a href={attributes.href} target="_blank">
      {Icon && <Icon size={size} />}
    </a>
  );
}
