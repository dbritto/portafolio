import Icon from "../molecules/Icon";

export default function Contact() {
    return (
        <div className="mx-auto w-full max-w-5xl px-4 py-12">
            <div className="flex flex-col gap-4 text-center mb-12">
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Construyamos algo juntos</h1>
                <p className="text-[#9CA3AF] text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">Si tienes una pregunta, una propuesta o simplemente quieres saludar, no dudes en contactarme.</p>

                <h2 className="text-amber-300 text-1xl md:text-1xl font-black leading-tight tracking-[-0.033em]">En estos momentos el envio de mensajes por este medio no esta en funcionamiento debido a que seguimos trabajando en el diseño de la pagina</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
                <div className="lg:col-span-3">
                    <form className="flex flex-col gap-6">
                        <label className="flex flex-col w-full">
                            <p className="text-white text-base font-medium leading-normal pb-2">Nombre</p>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#374151] bg-[#1f2937] h-12 placeholder:text-[#9CA3AF] px-4 py-2 text-base font-normal leading-normal transition-all"
                                placeholder="Tu nombre completo"
                            />
                        </label>

                        <label className="flex flex-col w-full">
                            <p className="text-white text-base font-medium leading-normal pb-2">Email</p>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#374151] bg-[#1f2937] h-12 placeholder:text-[#9CA3AF] px-4 py-2 text-base font-normal leading-normal transition-all"
                                placeholder="tu@email.com"
                            />
                        </label>

                        <label className="flex flex-col w-full">
                            <p className="text-white text-base font-medium leading-normal pb-2">Tu Mensaje</p>
                            <textarea
                                className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#374151] bg-[#1f2937] min-h-36 placeholder:text-[#9CA3AF] px-4 py-3 text-base font-normal leading-normal transition-all"
                                placeholder="Escribe tu mensaje aquí..."
                            />
                        </label>

                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-blue-400 transition-all">
                            <span className="truncate">Enviar Mensaje</span>
                        </button>
                    </form>
                </div>

                <div className="lg:col-span-2">
                    <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-2 lg:p-4 flex flex-col gap-6 items-center">
                        <h3 className="text-white text-xl font-bold">O encuéntrame aquí</h3>
                        <div className="flex gap-4">
                            <Icon href="https://github.com/dbritto" src="/github.png" alt="GitHub Logo" />
                            <Icon href="https://www.linkedin.com/in/daniel-britto-183aaa1a1/" src="/linkedin.png" alt="LinkedIn Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}