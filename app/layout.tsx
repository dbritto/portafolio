import type { Metadata } from "next";
import "./globals.css";
import SocialIcon from "@/components/organisms/SocialIcon";
import Footer from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Creando un dev",
  description: "Portafolio de proyectos: tienda online, app SwiftUI e integración de facturación electrónica.",
  metadataBase: new URL('https://tusitio.com'),
  alternates: { canonical: '/' },
  keywords: ['portafolio', 'desarrollador', 'React', 'Next.js', 'SwiftUI', 'WhatsApp API', 'facturación electrónica'],
  authors: [{ name: 'Tu Nombre', url: 'https://github.com/dbritto' }],
  openGraph: {
    title: 'Creando un dev',
    description: 'Portafolio de proyectos: tienda online, app SwiftUI e integración de facturación electrónica.',
    url: 'https://tusitio.com',
    siteName: 'Creando un dev',
    images: [
      {
        url: 'https://tusitio.com/og-image.png',
        alt: 'Creando un dev — Proyectos',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creando un dev',
    description: 'Portafolio de proyectos: tienda online, app SwiftUI e integración de facturación electrónica.',
    images: ['https://tusitio.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SocialIcon />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tu Nombre",
              url: "https://tusitio.com",
              sameAs: ["https://github.com/dbritto"],
              jobTitle: "Desarrollador",
              worksFor: { "@type": "Organization", name: "Creando un dev" },
            }),
          }}
        />
        <main className="pt-12 bg-black">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
