'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

type ButtonLinkProps = {
  content: string;
  link: string;
};

export default function ButtonNav({ content, link }: ButtonLinkProps) {

  const pathname = usePathname();

  // 2. Determinar si la ruta actual (pathname) coincide con el link del botón
  // Usamos una lógica simple: si pathname === link, está activo.
  // Nota: Si usas rutas indexadas (ej. '/'), es posible que necesites una lógica más compleja 
  // (ej. pathname.startsWith(link)) si la ruta del link es la base de varias subrutas.
  const isActive = pathname === link; 

  return (
    <Link
      href={link}
      className={`
        text-sm font-medium leading-normal transition-colors
        ${isActive ? "text-blue-400 border-b-2 border-blue-400" : "text-white hover:text-primary border-b-2 border-transparent"}
        pb-1
      `}
    >
      {content}
    </Link>
  );
}