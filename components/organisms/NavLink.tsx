'use client'
import ButtonNav from "../atoms/ButtonNav";

type ToggleMenuFunction = () => void;

export interface NavLinkProps {
    isOpen: boolean; 
    isMobile: boolean;
    toggleMenu: ToggleMenuFunction; 
}

export default function NavLink({ isOpen, isMobile, toggleMenu } : NavLinkProps) {
    
    if (isMobile && !isOpen) return null

    const mobileClasses = "fixed top-[44px] left-0 right-0 h-60 bg-gray-900 flex-col items-center justify-center gap-6 p-5";
    const desktopClasses = "hidden md:flex flex-1 justify-end items-center gap-8";

    return (
        <nav className={`${isMobile ? mobileClasses : desktopClasses}`} >
            <div 
                className="flex flex-col md:flex-row items-center gap-4" 
                onClick={isMobile ? toggleMenu : undefined}
            >
                <ButtonNav content="Inicio" link="/"/>
                <ButtonNav content="Sobre mi" link="/about"/>
                <ButtonNav content="Proyectos" link="/projects" />
                <ButtonNav content="Contacto" link="/contact" />
            </div>
            
           
        </nav>
    );
}