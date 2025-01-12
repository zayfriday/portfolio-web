import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm.js';

function Contact() {

    return (
        <div id="contact" className='flex flex-col mt-10 lg:mt-20 pt-10 pb-4'>

            <motion.div 
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 0.5 }}
             className='self-center mb-4 p-10 w-screen bg-indigo-700 bg-opacity-15'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.75 }}
                    className='bg-gradient-to-r from-emerald-400 from-50% via-slate-400 via-60% to-green-700 to-70% bg-clip-text text-transparent
                    font-thin text-center text-5xl lg:text-6xl tracking-wide my-auto p-2'>
                        Reach Me
                </motion.h2>
            </motion.div>

            {/* for small devices it stacks elements, for lg devices it spaces them evenly horizontally */}
            <div className='flex flex-wrap justify-evenly text-2xl font-light tracking-tight w-full gap-2 pt-2 mt-10'>
                <motion.p 
                 whileInView={{ opacity: 1, x: 0 }} 
                 initial={{ opacity: 0, x: -100 }} 
                 transition={{ duration: 1 }}
                 className='p-2'>
                    By email: <a>zayfriday1@gmail.com</a>
                </motion.p>
            </div>

            {/* <ContactForm /> */}
        </div>
    )
}

export default Contact