import SectionHeader from "@/components/organisms/SectionHeader";

const homeDataHeader = {
  title: "Desarrollador Full-Stack",
  description: "Creando aplicaciones web modernas y robustas con React, Next.js, Node.js y MySQL",
  buttonText: "Ver mis proyectos",
  buttonLink: "#",
  backgroundImage: "/fondo.jpeg"
};

export default function Home() {
  return (
    <SectionHeader
      title={homeDataHeader.title}
      description={homeDataHeader.description}
      buttonLink={homeDataHeader.buttonLink}
      buttonText={homeDataHeader.buttonText}
      backgroundImage={homeDataHeader.backgroundImage}
    />
  );
}
