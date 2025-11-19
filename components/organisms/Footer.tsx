import LinkPrimary from "../atoms/LinkPrimary";

export default function Footer() {
    return (


        <footer className="bg-neutral-primary-soft rounded-base shadow-xs m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-1xl text-body sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Daniel Britto</a>.
                </span>
                 <div className="sm:flex sm:items-center sm:justify-between">
                <div className="mx-auto max-w-screen-xl p-4 flex justify-center">
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <LinkPrimary icon='github' link='https://github.com/dbritto'/>
                        <LinkPrimary icon='discord' link='#'/>
                        <LinkPrimary icon='youtube' link='https://www.youtube.com/@creando_un_dev'/>
                        <LinkPrimary icon='instagram' link='https://www.instagram.com/creandodev?utm_source=qr&igsh=MTVtN2JkeHdxZHhqbQ=='/>
                    </div>
                </div>
            </div>
            </div>
           
        </footer>


    );
}