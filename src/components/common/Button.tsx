import { IconType } from "react-icons";

interface Interface {
  label: string;
  icon?: IconType;
  secondary?: boolean;
  transparent?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button(attributes: Interface) {
  const Icon = attributes.icon;

  return (
    <button
      className={`${
        attributes.className
      } relative inline-flex w-min items-center select-none gap-2 p-4 px-6 rounded-full transition-colors duration-300
        ${
          attributes.secondary
            ? !attributes.transparent
              ? "bg-gray-800 text-white hover:bg-gray-800 hover:text-gray-400"
              : "bg-transparent text-white hover:bg-transparent"
            : "bg-green-300 text-gray-800 hover:bg-gray-800 hover:text-white"
        }`}
      onClick={attributes.onClick}
    >
      <span className="font-medium whitespace-nowrap">{attributes.label}</span>
      {Icon && <Icon size={24} />}
    </button>
  );
}
