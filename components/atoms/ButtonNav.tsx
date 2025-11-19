type ButtonLinkProps = {
  content: string;
  link: string;
  active?: boolean;
};

export default function ButtonNav({ content, link, active = false }: ButtonLinkProps) {
  return (
    <a
      className={`
        text-sm font-medium leading-normal transition-colors
        ${active ? "text-blue-400 border-b-2 border-blue-400" : "text-white hover:text-primary border-b-2 border-transparent"}
        pb-1
      `}
      href={link}
    >
      {content}
    </a>
  );
}
