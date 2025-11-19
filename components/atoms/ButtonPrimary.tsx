type ButtonLinkProps = {
  content: string;
  link: string; 
};

export default function ButtonPrimary({ content, link}: ButtonLinkProps) {
  return (
   <div className="flex px-4 py-3 justify-center">
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-blue-500 hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors">
<span className="truncate">Ver mis proyectos</span>
</button>
</div>
  );
}
