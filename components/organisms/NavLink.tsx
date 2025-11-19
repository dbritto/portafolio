import ButtonNav from "../atoms/ButtonNav";
import SocialIcon from "../molecules/SocialIcon";

export default function NavLink() {
    return (
        <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
            <div className="flex items-center gap-9">
                <ButtonNav content="sobre mi" link="#"  active/>
                <ButtonNav content="proyectos" link="#" />
                <ButtonNav content="Contacto" link="#" />
            </div>
            <div className="flex gap-2">
                <SocialIcon href="https://github.com/dbritto" src="/github.png" alt="GitHub Logo" />
                <SocialIcon href="https://www.linkedin.com/in/daniel-britto-183aaa1a1/" src="/linkedin.png" alt="LinkedIn Logo" />
            </div>
        </nav>
    );
}
