import HeroSection from "../molecules/HeroSection";
import Header from "./Header";

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
  className="relative w-full h-screen bg-center"
  style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: "93%",}}>

      <div className="absolute inset-0 bg-black/70"></div>
      <Header/>
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



