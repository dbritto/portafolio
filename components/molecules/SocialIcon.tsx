import Image from "next/image";

type SocialIconProps = {
  href: string;
  src: string;
  alt: string;
};

export default function SocialIcon({ href, src, alt }: SocialIconProps) {
  return (
    <a
      className="flex h-10 w-10 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={src} alt={alt} width={20} height={20} />
    </a>
  );
}
