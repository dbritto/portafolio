
import HeroSection from "../molecules/HeroSection";

type HeroSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string; // opcional
};

export default function SectionHeader({ title, description, buttonLink, buttonText, backgroundImage }: HeroSectionProps) {
  return (
    <section
      className="relative w-full pb-3 md:h-[calc(100vh-48px)] bg-center "
      style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "93%",
          backgroundRepeat: "no-repeat", 
        }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <HeroSection
          title={title}
          description={description}
          buttonLink={buttonLink}
          buttonText={buttonText}
        />
      </div>
       
    </section>
  );
}