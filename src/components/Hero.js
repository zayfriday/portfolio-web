import React from 'react'
import { motion } from 'framer-motion'
import Technologies from './Technologies';

const container = (time) => ({
    hidden: {
        x: -100, opactiy: 0
    },
    visible: {
        x: 0, opacity: 1, transition: {duration: 1, delay: time}
    },
});

function Hero() {
    return (
        <div id="hero" className=' pb-20 lg:mb-40 my-20'>
            <div className='flex flex-wrap'>

                    <div className='w-full flex flex-col items-center'>
                        <motion.h1
                         initial={{ x: 800, opactiy: 0}}
                         whileInView={{ x: 0, opacity: 1}}
                         transition={{ duration: 0.7}}
                         className='pb-16 text-6xl lg:text-8xl font-thin lg:mt-28 lg:tracking-wide text-slate-500'>
                            Isaiah Friday
                        </motion.h1>
                        <motion.span 
                         initial={{ x: -800, opactiy: 0}}
                         whileInView={{ x: 0, opacity: 1}}
                         transition={{ duration: 1}}
                         className='bg-gradient-to-r from-emerald-400 via-fuchsia-200 to-violet-700
                         bg-clip-text text-3xl tracking-tight font-extralight text-transparent mb-4'>
                            Programming & Cybersecurity
                        </motion.span>
                        <motion.div
                         initial={{ x: -800, opactiy: 0}}
                         whileInView={{ x: 0, opacity: 1}}
                         transition={{ duration: 1.3}}
                         className='my-4'>
                            <Technologies />
                        </motion.div>
                    </div>

            </div>
        </div>
    )
}

export default Hero