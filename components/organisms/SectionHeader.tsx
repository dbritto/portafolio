
import HeroSection from "../molecules/HeroSection";
import Icon from "../molecules/Icon";
import SocialIcon from "./SocialIcon";

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
      className="relative w-full h-[50vh] md:h-screen bg-center"
      style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "93%",
          backgroundRepeat: "no-repeat", 
        }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      {/* <SocialIcon/>  */}
      
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