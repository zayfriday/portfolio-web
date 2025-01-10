import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiGnubash, SiFirebase, SiNetlify } from 'react-icons/si'
import { FaNodeJs } from "react-icons/fa";
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
    <div id="technologies" className='flex flex-col pb-4'>
        <div className='flex flex-wrap items-center justify-center gap-4 mx-4 p-8'>
            <motion.div 
             variants={iconVariants(2.2)} 
             intial="initial" 
             animate="animate" 
             whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-3xl text-cyan-400'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(2.4)} 
             intial="initial" 
             animate="animate" 
             whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiGnubash className='text-3xl text-gray-400'/>
            </motion.div>
            <motion.div variants={iconVariants(2.6)} intial="initial" animate="animate" 
            whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiFirebase className='text-3xl text-orange-500'/>
            </motion.div>
            <motion.div variants={iconVariants(2.8)} intial="initial" animate="animate" 
            whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiNetlify className='text-3xl text-cyan-600'/>
            </motion.div>
            <motion.div variants={iconVariants(3)} intial="initial" animate="animate" 
            whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-3xl text-green-500'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies


{/* <div id="technologies" className='flex flex-col border-b border-neutral-800 pb-24 '>
<motion.h2 
whileInView={{ opacity: 1, y: 0}}
initial={{ opacity: 0, y: -100 }}
transition={{ duration: 0.75 }}
className='my-10 text-center text-4xl'> 
    Expertise
</motion.h2>
<div className='Qualifications'>

</div>

<div className='flex flex-wrap items-center justify-center gap-4 mx-4'>
    <motion.div variants={iconVariants(2.2)} intial="initial" animate="animate" 
    whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
    className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiReactjsLine className='text-3xl text-cyan-400'/>
    </motion.div>
    <motion.div variants={iconVariants(2.4)} intial="initial" animate="animate" 
    whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
    className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiGnubash className='text-3xl text-gray-400'/>
    </motion.div>
    <motion.div variants={iconVariants(2.6)} intial="initial" animate="animate" 
    whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
    className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiFirebase className='text-3xl text-orange-500'/>
    </motion.div>
    <motion.div variants={iconVariants(2.8)} intial="initial" animate="animate" 
    whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
    className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiNetlify className='text-3xl text-cyan-600'/>
    </motion.div>
    <motion.div variants={iconVariants(3)} intial="initial" animate="animate" 
    whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1}}
    className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaNodeJs className='text-3xl text-green-500'/>
    </motion.div>
</div>
</div> */}