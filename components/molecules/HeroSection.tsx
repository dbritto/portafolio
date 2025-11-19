
import ButtonPrimary from "../atoms/ButtonPrimary";
import HeroText from "../atoms/HeroText";
import TitleWithDescription from "../atoms/TitleWithDescription";
import Icon from "./Icon";

type HeroSectionProps = {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
};

export default function HeroSection({ title, description, buttonText, buttonLink }: HeroSectionProps) {
    return (
        <section className="flex-grow flex items-center justify-center">
            <div className="layout-content-container flex flex-col items-center max-w-[960px] flex-1 px-6 text-center">

                <HeroText content={title}/>

                <TitleWithDescription content={description}/>
                 <ButtonPrimary content={buttonText} link={buttonLink} />
                <div className="flex gap-2  md:mt-0 justify-center">
                <Icon href="https://github.com/dbritto" src="/github.png" alt="GitHub Logo"/>
                <Icon href="https://www.linkedin.com/in/daniel-britto-183aaa1a1/" src="/linkedin.png" alt="LinkedIn Logo" />
            </div>
            </div>
        </section>
    );
}
