type TypographyListProps = {
  items?: string[];
  children?: React.ReactNode;
};

export function TypographyList({ items, children }: TypographyListProps) {
  return (
    <ul className="my-3 ml-3 list-none [&>li]:mt-4">
      {items
        ? items.map((item, i) => <li key={i}>{item}</li>)
        : children}
    </ul>
  );
}
