import React from 'react'
import { motion } from 'framer-motion'
import Technologies from './Technologies';
import { useEffect, useState } from 'react';

function Hero() {
    // const [hasLoaded, setHasLoaded] = useState(false);

    // useEffect(() => {
    //     // function to check when all page elements (images, scripts, etc.) are loaded
    //     const handleLoad = () => {
    //       console.log("page loaded");
    //       setHasLoaded(true);
    //     };
    
    //     // Add event listener to window load event
    //     window.addEventListener("load", handleLoad);
    
    //     // Clean up the event listener
    //     return () => {
    //       window.removeEventListener("load", handleLoad);
    //     };
    //   }, []); // checks that all elements on page have loaded when page renders

    return (
        <div id="hero" className='pb-20 lg:mb-40 my-20'>
            <div className='flex flex-wrap'>

                <div className='w-full flex flex-col items-center'>
                    <motion.h1
                     initial={{opactiy: 0, x:-300}}
                     animate={{opacity: 1, x: 0}}
                     transition={{ duration: 0.5 }}
                     viewport={{ once: true, scroll: true }}
                     className='text-center pb-12 text-7xl 
                     lg:text-9xl font-semibold lg:tracking-wide mt-28 
                     bg-gradient-to-r from-emerald-800 to-emerald-200 bg-clip-text text-transparent'>
                        Isaiah <span className='bg-gradient-to-r from-slate-400 to-violet-400 bg-clip-text text-transparent'>Friday</span>
                    </motion.h1>
                    <motion.span
                     initial={{ x: -300, opactiy: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 0.75 }}
                     viewport={{ once: true }}
                     className='bg-gradient-to-r from-emerald-400 via-fuchsia-200 to-violet-700
                     bg-clip-text text-3xl font-extralight text-transparent pb-4 text-center'>
                        Programming & Cybersecurity
                    </motion.span>
                    <motion.div
                        initial={{ x: -300, opactiy: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className=''>
                            <Technologies />
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Hero