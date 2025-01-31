import { IconType } from "react-icons";

interface Interface {
  className?: string;
  children: React.ReactNode;
}

export default function Card(attributes: Interface) {
  return (
    <div
      className={`${attributes.className} flex flex-col items-center select-none p-4 rounded-xl bg-gray-800`}
    >
      {attributes.children}
    </div>
  );
}
