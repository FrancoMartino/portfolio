interface Interface {
  className?: string;
  children: React.ReactNode;
}

export default function Card(attributes: Interface) {
  return (
    <div
      className={`${attributes.className} flex flex-col items-center select-none p-4 rounded-xl bg-gray-800 shadow-lg shadow-gray-700/30`}
    >
      {attributes.children}
    </div>
  );
}
