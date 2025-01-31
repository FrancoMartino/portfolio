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
      href={attributes.link}
      className={
        "relative group inline-flex items-center select-none gap-2 p-2 px-4 rounded-full transition-transform duration-300 bg-gray-700 text-white hover:scale-[102%] " +
        attributes.className
      }
      target="_blank"
    >
      <div className="relative flex items-center gap-2">
        {attributes.icon && (
          <img alt={attributes.title} src={attributes.icon} className="w-6 md:w-4 aspect-auto" />
        )}
        <span className="whitespace-nowrap">{attributes.title}</span>
      </div>
    </a>
  );
}
