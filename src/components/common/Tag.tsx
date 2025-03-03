import { IconType } from "react-icons";

interface Interface {
  title: string;
  icon?: string;
  link?: string;
  className?: string;
}

export default function Tag(attributes: Interface) {
  return (
    <a
      {...(attributes.link ? { href: attributes.link, target: "_blank" } : {})}
      className={
        "relative group inline-flex items-center select-none gap-2 p-2 px-4 rounded-full transition-transform duration-300 bg-gray-700 text-white shadow-lg shadow-gray-700/30 hover:scale-[102%] " +
        attributes.className
      }
    >
      <div className="relative flex items-center gap-2">
        {attributes.icon && (
          <img
            alt={attributes.title}
            src={attributes.icon}
            className="max-w-6 md:max-w-4 max-h-6 md:max-h-4"
          />
        )}
        <span className="whitespace-nowrap">{attributes.title}</span>
      </div>
    </a>
  );
}
