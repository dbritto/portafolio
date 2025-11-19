type TextProps = {
  content: string;
};

export default function TitleWithDescription({ content}: TextProps) {
  return (
   <p className="text-white/80 text-lg md:text-xl font-normal leading-normal pb-6 pt-1 max-w-3xl">{content}</p>
  );
}
