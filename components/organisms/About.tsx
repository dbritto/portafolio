export default function About() {
    return (
        <div className="flex flex-1 items-center justify-center px-4 md:px-8 py-12 bg-black from-blue-50/20 to-transparent">
            <div className="w-full max-w-6xl">
                <section className="flex flex-col gap-12 lg:flex-row lg:gap-16 items-start">
                    <div className="lg:w-1/2 flex flex-col gap-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl">
                                Acerca de <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">mí</span>
                            </h1>
                            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                                Soy un desarrollador Full-Stack que construye experiencias digitales elegantes y mantenibles. Me enfoco en interfaces accesibles, código bien estructurado y despliegues confiables.
                            </p>
                        </div>

                        <div className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
                            <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-20 blur-sm pointer-events-none"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Mi Stack Tecnológico</h3>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <span className="px-3 py-1 rounded-full text-sm bg-white/6 border border-white/8 text-white flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-sm bg-[url('/icons/react.svg')] bg-contain bg-center" />
                                    React
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm bg-white/6 border border-white/8 text-white flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-sm bg-[url('/icons/nextjs.svg')] bg-contain bg-center" />
                                    Next.js
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm bg-white/6 border border-white/8 text-white flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-sm bg-[url('/icons/nodejs.svg')] bg-contain bg-center" />
                                    Node.js
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm bg-white/6 border border-white/8 text-white flex items-center gap-2">
                                    MySQL
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm bg-white/6 border border-white/8 text-white flex items-center gap-2">
                                    Tailwind CSS
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm bg-white/6 border border-white/8 text-white flex items-center gap-2">
                                    TypeScript
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex flex-col gap-8">
                        <div className="relative p-px rounded-xl bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-background-dark rounded-xl p-6">
                                <h3 className="text-2xl font-bold mb-6 text-white">Mi Trayectoria</h3>
                                <div className="relative space-y-10 pl-10">
                                    <div className="relative">
                                        <div className="absolute -left-[34px] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg"></div>

                                        <h4 className="font-bold text-lg text-white">Desarrollador Next.js</h4>
                                        <p className="text-sm text-gray-400">Globant | 2025</p>

                                        <p className="mt-2 text-gray-300 leading-relaxed">
                                            Contribuí en aplicaciones web complejas dentro de equipos grandes, impulsando prácticas de componentes y accesibilidad.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[34px] top-2 w-5 h-5 rounded-full border-2 border-glow-end bg-background-dark"></div>

                                        <h4 className="font-bold text-lg text-white">Desarrollador Frontend Freelance</h4>
                                        <p className="text-sm text-gray-400">Freelancer | 2024 - 2025</p>

                                        <p className="mt-2 text-gray-300 leading-relaxed">
                                            Modernicé landing pages y migré interfaces legacy a React, mejorando rendimiento y experiencia de usuario.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[34px] top-2 w-5 h-5 rounded-full border-2 border-gray-600 bg-background-dark"></div>

                                        <h4 className="font-bold text-lg text-white">Hackatón</h4>
                                        <p className="text-sm text-gray-400">Alianza Bioversity | 2024</p>

                                        <p className="mt-2 text-gray-300 leading-relaxed">
                                            Prototipé una solución Full-Stack enfocada en modelado ambiental, entregando un MVP funcional en tiempo limitado.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full border-2 border-gray-600 bg-gray-900"></div>

                                        <h4 className="font-bold text-lg text-white">Hackatón</h4>
                                        <p className="text-sm text-gray-400">Globant | 2023</p>

                                        <p className="mt-2 text-gray-300">
                                            Lideré la arquitectura frontend y diseñé la interfaz de una plataforma de ayuda ciudadana para emergencias. Implementé componentes React reutilizables, lógica CRUD y el consumo de APIs para integrar el backend en Java.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}   