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
                    <img alt="React Logo" className="w-6 h-6 mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1rS81c9TBM4g3ailGMtyyJZjuvXbqtEx8mccUspu4DwWq8-anjgYrByIHHjacqMU4tjjNfwF3cD-AkLkAvrlcPClHsvHRjkq6ldxYYlJoUyGjPBMXCTfU9aqJD2ECsKai3taY3SfbtNhyqJyJr8QAZr-L2FDoFaifNmHtI7e3RiKiPU97pg8HHiKs0PXZaH7Mw3XSoJ_-6y6KoBrX9b3IT1c1KMRifFJNc1r_dGvN-AY_8He3Ioup58ldBaBTx0XI0XGvtEq9DVQ"/>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs">React</h4>
                    <p className="text-[10px] text-gray-500">Frontend</p>
                </div>


                <div className="skill-node absolute top-[15%] right-[20%] md:right-[28%] w-20 h-20 md:w-24 md:h-24 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg flex flex-col items-center justify-center p-1 text-center">
                    <img alt="Next.js Logo" className="w-6 h-6 mb-1 filter dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBse452bfXnWfkbLlpTeo7qDSblBayFojp_SDy-CRtiwxoulb6I3Ne_-0KfiAbsK7lZBsyvDFW8gNZWsDAaNV928m_l64hkpHYUMqa30ENzXtNcb2xyc1mAm5H_h1f5FKaQFtLrhehTfs4lEmq45HaGL-OSLsVmLS1rk7nJFndSfI3fTRERDRTGcCSrFEadsYWx_wFU31ycaC1Y0sMhhGNVEcsWee9bZSVlyCr-LPbW0kzWRPRPt_Vd63hvlr22fjRe7pVPvaHilyE"/>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs">Next.js</h4>
                    <p className="text-[10px] text-gray-500">Full-Stack</p>
                </div>

                <div className="skill-node absolute bottom-[15%] left-[20%] md:left-[28%] w-20 h-20 md:w-24 md:h-24 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg flex flex-col items-center justify-center p-1 text-center">
                    <img alt="Node.js Logo" className="w-6 h-6 mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf8iReeJQDzM4PBOKQxKyfGmCiVAWQMDP7BHkuB1__Uzs-bDmA3SqMNgJcKATdU4w_2gQj7QES0YM2GsJiBA74tYv6Y8vEtCMzIkE-Ejb21iNnvQsEmh70pJUmzDCyn-ETK14C7IbZJT4ytM0ZLAuhMcJJbvE4088mLPVr4TnIkHZZ8nSG77_RCwoSRiaXPwMXt1pprwHUfa1Lx_L4VbHQitLHwkSjDJVAShMv1pCv5CTRkdnK9iiJ3BczVXSYZgjHH9nvzknai9s"/>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs">Node.js</h4>
                    <p className="text-[10px] text-gray-500">Backend</p>
                </div>


                <div className="skill-node absolute bottom-[15%] right-[20%] md:right-[28%] w-20 h-20 md:w-24 md:h-24 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg flex flex-col items-center justify-center p-1 text-center">
                    <img alt="MySQL Logo" className="w-6 h-6 mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfJfqaby2UNTxe4wW7dV6T52t9-StLuptW5uReSqNX0qONrcgCFZNUlLg5IIJm8eXBe4EXdyYUNWTY-BDpMKjQtXqeIw8uzwr62mzWWEnWikivh8fjiAB3ctRegxzvmIn68S0kkE2cPTtC2fzfGicx6PlBsMInxYtiYOJfFJxGJBN2XROufXizyjfKLyUeWLe25ZKv7YFUEK3kupB5pvKgX4E5AhDgPS9m1cg44gEi7Oj-W5eB77Fc_I2vIYfqq59sBtQykGBvSi8"/>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs">MySQL</h4>
                    <p className="text-[10px] text-gray-500">Database</p>
                </div>


                <div className="skill-node absolute top-1/2 -translate-y-1/2 left-[5%] md:left-[20%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md flex flex-col items-center justify-center p-1 text-center">
                    <img alt="Tailwind CSS Logo" className="w-5 h-5 mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXKjcXzv5M1yeDX0sh37QbDGzoUkhNmY--5SU7S8CH4E7wc0rI8hdV1gjkkrF02hYbK-9bQJFbL1aPHeP5krZ-Dlkq6H89N2MZRoDSWGYf3Ym0KlLFsrfUJeuHbpCT1rXdLvn0aIYeQn6fnzrckLTk1reO617DUfDd2lFwLAkiLi2doFEvCPlyyGX0nOu0msIV9MwVaxRQk7uregHXd99JJYS8KqxjfoAsJ_nFpoBb0NxOo9EobBGjYhIDB7nhq1CH9ykkZUQ51fc"/>
                    <h4 className="text-[10px] font-bold text-gray-900 dark:text-white">Tailwind</h4>
                </div>
                

                <div className="skill-node absolute top-1/2 -translate-y-1/2 right-[5%] md:right-[20%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md flex flex-col items-center justify-center p-1 text-center">
                    <img alt="Docker Logo" className="w-5 h-5 mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-vpEUEuIcIq4HZTZft9tMxwInEob8R5vXUQY7slHZ8OgnfRaoWPAQbvK41PxwWjKq-x1XccYQA-RdXFLq5BWIBJKSfnozClZFT8Z3I9joNrdoMPJ9TSumV6Kxy6VZ8uHq3eAPFE3RNqrwYR2YMEiPYp39XTBPVX5GuFN08V2vt_qy5G6LxFaSn4Nc1O6a0sd5yW4Q2KSwgV0vPLGbQlDe2vilg4t6g1U4JMBc_3nbaD0j5qV19b6mf98sllnpfCVNPl3X84G2h4A"/>
                    <h4 className="text-[10px] font-bold text-gray-900 dark:text-white">Docker</h4>
                </div>

            </div>
        </div>
    );
}