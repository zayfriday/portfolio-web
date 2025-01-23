import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiFirebase, SiNextdotjs , SiTailwindcss } from 'react-icons/si'
import { motion } from "framer-motion"

const iconVariants = (time) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: time,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

function Technologies() {
  return (
    <div className='flex flex-col pb-4'>
        <div className='flex flex-wrap items-center justify-center gap-5 mx-6 p-8'>
            <motion.div 
             variants={iconVariants(2.2)} 
             intial="initial" 
             animate="animate" 
             whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-4xl text-cyan-400'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(2.8)} 
             intial="initial" animate="animate" 
             whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-4xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.4)} 
            intial="initial" 
            animate="animate" 
            whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiFirebase className='text-4xl text-orange-500'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(2.6)} 
             intial="initial" 
             animate="animate" 
             whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiNextdotjs className='text-4xl text-slate-400'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies
