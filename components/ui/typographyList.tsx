type TypographyListProps = {
  items?: string[];
  children?: React.ReactNode;
};

export function TypographyList({ items, children }: TypographyListProps) {

  return (
    <ul className={`my-3 ml-3 
      
      max-sm:flex max-sm:flex-row max-sm:flex-wrap max-sm:justify-center max-sm:m-0
    
    list-none [&>li]:mt-4   max-sm:[&>li]:mt-2`}>
      {items
        ? items.map((item, i) => <li key={i}>{item}</li>)
        : children}
    </ul>
  );
}
