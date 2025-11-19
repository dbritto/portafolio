type ButtonLinkProps = {
  icon: string;
  link: string;
};

export default function LinkPrimary({ icon, link }: ButtonLinkProps) {

  return (
    <a href={link} className="text-body hover:text-heading ms-5">
      <svg width="28" height="28">
        <use xlinkHref={`/sprite.svg#${icon}`} />
      </svg>
    </a>
  );
}