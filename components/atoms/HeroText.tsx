type TextProps = {
  content: string;
};

export default function HeroText({ content}: TextProps) {
  return (
   <h1 className="text-white tracking-tighter text-4xl md:text-6xl font-bold leading-tight pb-3 pt-6">{content}</h1>
  );
}

// Juan Pérez. Desarrollador Full-Stack