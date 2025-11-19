import NavLink from "./NavLink"
import Image from "next/image";




export default function SocialIcon() {
    return (
        <header className="absolute top-0 left-0 right-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-10 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white">
                        <div className="w-6 h-6 text-primary">
                            <Image src='/js.png' alt='logo js' width={20} height={20} />
                        </div>
                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Daniel Britto</h2>
                    </div>
                    <NavLink />
                    <div className="md:hidden">
                        <button className="text-white">
                            <span className="material-symbols-outlined text-3xl">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
