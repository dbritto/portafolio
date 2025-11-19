export default function Perfil() {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Sobre Mí</h2>
            
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                    <div className="shrink-0">
                        <div className="relative w-48 h-48 md:w-56 md:h-56">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 animate-spin-slow"></div>
                            <img 
                                alt="Foto de perfil de Daniel Britto" 
                                className="absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full object-cover border-4 border-gray-50 dark:border-gray-800" 
                                src="/perfil.jpeg" 
                            />
                        </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <div className="space-y-3">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                Hola, soy Daniel Britto
                            </h1>
                            <p className="text-lg md:text-xl text-blue-500 dark:text-blue-400 font-semibold">
                                Desarrollador Full-Stack
                            </p>
                        </div>
                        
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Apasionado por crear soluciones digitales robustas y eficientes. Con una sólida experiencia en el ecosistema de JavaScript, me especializo en construir aplicaciones web modernas desde el frontend hasta el backend, transformando ideas complejas en productos intuitivos y escalables.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
                            <a 
                                className="inline-flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white text-base font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/20" 
                                href="https://drive.google.com/file/d/1ccuDDwniewjOM5DomlrKlojqHGUf74s7/view?usp=sharing"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>Descargar CV</span>
                            </a>
                            <a 
                                className="inline-flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white text-base font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/10" 
                                href="/about"
                            >
                                <span>Ver más</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}