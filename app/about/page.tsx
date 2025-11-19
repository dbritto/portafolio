export const metadata = {
  title: 'Sobre mi',
  description: 'Página Sobre mi',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Sobre mí</h1>
        <p className="text-lg text-gray-200">Aquí iría una breve biografía y tecnologías principales. Este es un placeholder para empezar a trabajar en la página.</p>
      </div>
    </main>
  );
}
