export default function Projects() {
    const projects = [
        {
            title: 'StoryBook',
            desc: 'proyecto de componentes reutilizables con StoryBook.',
            img: '/storyBook.png',
            tags: ['React', 'storybook'],
            repo: 'https://github.com/dbritto/StoryBook'
        },
        {
            title: 'Tienda en Línea',
            desc: 'Tienda con integración a la API de WhatsApp para notificaciones y pedidos.',
            img: '/TiendaOnlineWhatsapp.png',
            tags: ['React', 'Next.js', 'WhatsApp API'],
            repo: ''
        },
        {
            title: 'App SwiftUI',
            desc: 'Proyecto móvil en SwiftUI con interfaces reactivas y persistencia local.',
            img: '/appApple.png',
            tags: ['SwiftUI', 'iOS'],
            repo: 'https://github.com/dbritto/Challenge_iOS'
        },
        {
            title: 'Integración Factura Electrónica',
            desc: 'Cliente para consumir API de facturación electrónica (próximo proyecto).',
            img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=60',
            tags: ['API', 'Facturación'],
            repo: ''
        },
    ];

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-white">
                    Proyectos
                </h1>
                <p className="mt-2 text-gray-400 max-w-2xl mx-auto">Colección seleccionada de proyectos personales y profesionales.</p>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                    <article key={p.title} className="group relative overflow-hidden rounded-xl shadow-lg">
                        <img
                            alt={p.title}
                            src={p.img}
                            className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-75"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                        <div className="absolute inset-0 flex flex-col justify-end p-6 project-info opacity-100 transition-opacity duration-300">
                            <div>
                                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                                <p className="mt-2 text-sm text-gray-50 px-2 py-1 inline-block font-black desc-strong rounded bg-black/50">{p.desc}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <span key={t} className="inline-block px-2 py-1 text-xs font-medium text-gray-200 bg-white/10 rounded-full">{t}</span>
                                    ))}
                                </div>
                                <div className="mt-4 flex items-center gap-3">
                                    {p.repo ? (
                                        <a
                                            href={p.repo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 mt-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-1 text-xs font-semibold text-white hover:scale-105 transition-transform"
                                        >
                                            Repositorio
                                        </a>
                                    ) : (
                                        <span className="mt-4 inline-block text-xs text-gray-300">Repositorio pendiente</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>    
    );
}