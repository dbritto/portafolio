export default function Skills() {
    return (
        <div className="lg:col-span-3 p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Mapa de Conocimiento</h2>
            

            <div className="relative min-h-[350px] md:min-h-[450px] flex items-center justify-center pt-8 pb-8"> 
                

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-50 dark:bg-gray-800 border-2 border-blue-500 shadow-xl shadow-blue-500/20 flex flex-col items-center justify-center p-2 z-10">
                    <h3 className="text-sm md:text-xl font-bold text-center text-gray-900 dark:text-white">Full-Stack</h3>
                </div>
                <div className="connection-line absolute h-0.5 bg-blue-500 origin-bottom-left md:hidden" style={{ 
                    top: '30%', left: '28%', width: '14%', transform: 'rotate(-38deg)' 
                }}></div>

                {/* Centro a Next.js (Top-Right) - Mobile */}
                <div className="connection-line absolute h-0.5 bg-blue-500 origin-bottom-right md:hidden" style={{ 
                    top: '30%', right: '28%', width: '14%', transform: 'rotate(38deg)' 
                }}></div>

                {/* Centro a Node.js (Bottom-Left) - Mobile */}
                <div className="connection-line absolute h-0.5 bg-blue-500 origin-top-left md:hidden" style={{ 
                    bottom: '30%', left: '28%', width: '14%', transform: 'rotate(38deg)' 
                }}></div>

                {/* Centro a MySQL (Bottom-Right) - Mobile */}
                <div className="connection-line absolute h-0.5 bg-blue-500 origin-top-right md:hidden" style={{ 
                    bottom: '30%', right: '28%', width: '14%', transform: 'rotate(-38deg)' 
                }}></div>

                <div className="connection-line absolute h-0.5 bg-blue-500 hidden md:block" style={{ 
                    top: '50%', left: '60%', width: '15%', 
                    transformOrigin: '0% 50%',
                    transform: 'translate(-50%, -50%) rotate(-35deg)' 
                }}></div>


                <div className="connection-line absolute h-0.5 bg-blue-500 hidden md:block" style={{ 
                    top: '50%', left: '60%', width: '20%', 
                    transformOrigin: '0% 50%',
                    transform: 'translate(-50%, -50%) rotate(28deg)' 
                }}></div>


                <div className="connection-line absolute h-0.5 bg-blue-500 hidden md:block" style={{ 
                    top: '50%', left: '60%', width: '20%', 
                    transformOrigin: '0% 50%',
                    transform: 'translate(-50%, -50%) rotate(155deg)' 
                }}></div>


                <div className="connection-line absolute h-0.5 bg-blue-500 hidden md:block" style={{ 
                    top: '50%', left: '60%', width: '20%', 
                    transformOrigin: '0% 50%',
                    transform: 'translate(-50%, -50%) rotate(-152deg)' 
                }}></div>

                <div className="connection-line absolute h-0.5 bg-blue-500 hidden md:block" style={{ 
                    top: '50%', left: '100%', width: '50%', 
                    transformOrigin: '0% 50%',
                    transform: 'translate(-50%, -50%) rotate(180deg)' 
                }}></div>

                <div className="skill-node absolute top-[15%] left-[20%] md:left-[28%] w-20 h-20 md:w-24 md:h-24 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg flex flex-col items-center justify-center p-1 text-center">
                    <svg className="w-6 h-6 mb-1">
                        <use href="/sprite.svg#react" />
                    </svg>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs">React</h4>
                    <p className="text-[10px] text-gray-500">Frontend</p>
                </div>


                <div className="skill-node absolute top-[15%] right-[20%] md:right-[28%] w-20 h-20 md:w-24 md:h-24 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg flex flex-col items-center justify-center p-1 text-center">
          
                <img className="w-7 h-7" src="/next.svg" alt="Mi logo" />
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs">Next.js</h4>
                    <p className="text-[10px] text-gray-500">Full-Stack</p>
                </div>

                <div className="skill-node absolute bottom-[15%] left-[20%] md:left-[28%] w-20 h-20 md:w-24 md:h-24 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg flex flex-col items-center justify-center p-1 text-center">
                    <svg className="w-6 h-6 mb-1">
                        <use href="/sprite.svg#node" />
                    </svg>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs">Node.js</h4>
                    <p className="text-[10px] text-gray-500">Backend</p>
                </div>


                <div className="skill-node absolute bottom-[15%] right-[20%] md:right-[28%] w-20 h-20 md:w-24 md:h-24 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg flex flex-col items-center justify-center p-1 text-center">
                <img className="w-8 h-8" src="/mysql.svg" alt="Mi logo"/>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs">MySQL</h4>
                    <p className="text-[10px] text-gray-500">Database</p>
                </div>


                <div className="skill-node absolute top-1/2 -translate-y-1/2 left-[5%] md:left-[20%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md flex flex-col items-center justify-center p-1 text-center">
                    <svg className="w-5 h-5 mb-1">
                        <use href="/sprite.svg#tailwind" />
                    </svg>
                    <h4 className="text-[10px] font-bold text-gray-900 dark:text-white">Tailwind</h4>
                </div>
                

                <div className="skill-node absolute top-1/2 -translate-y-1/2 right-[5%] md:right-[20%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md flex flex-col items-center justify-center p-1 text-center">
                <img className="w-7 h-7" src="/docker.svg" alt="Mi logo"/>
                    <h4 className="text-[10px] font-bold text-gray-900 dark:text-white">Docker</h4>
                </div>

            </div>
        </div>
    );
}