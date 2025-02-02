interface Interface {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section(attributes: Interface) {
  return (
    <section
      id={attributes.id}
      className={"flex flex-col " + attributes.className}
    >
      {attributes.children}
    </section>
  );
}
