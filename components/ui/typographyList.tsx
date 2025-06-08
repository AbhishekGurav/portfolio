type TypographyListProps = {
  items?: string[];
  children?: React.ReactNode;
};

export function TypographyList({ items, children }: TypographyListProps) {
  return (
    <ul className="my-6 ml-6 list-none [&>li]:mt-2">
      {items
        ? items.map((item, i) => <li key={i}>{item}</li>)
        : children}
    </ul>
  );
}
