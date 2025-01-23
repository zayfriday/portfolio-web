import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm.js';

function Contact() {

    return (
        <div id="contact" className='flex flex-col mt-10 lg:mt-20 pt-10 pb-14 lg:pb-20 '>

            <div className='w-full flex justify-center justify-self-center'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.75 }}
                    className='bg-gradient-to-r from-violet-700 from-40% to-purple-400 to-55% bg-clip-text text-transparent
                    font-semibold text-center text-5xl lg:text-6xl tracking-wide p-2 my-8'>
                        Reach Me
                </motion.h2>
            </div>

            {/* for small devices it stacks elements, for lg devices it spaces them evenly horizontally */}
            <div className='flex flex-wrap justify-evenly text-xl lg:text-2xl font-light tracking-tight w-full gap-2 lg:pt-2 mt-10'>
                <motion.p 
                 whileInView={{ opacity: 1, x: 0 }} 
                 initial={{ opacity: 0, x: -100 }} 
                 transition={{ duration: 1 }}
                 className='p-2'>
                    Email me <a href="mailto:ifridayauto@zoho.com" className='text-indigo-600 hover:text-indigo-900'> @ifridayauto@zoho.com</a>
                </motion.p>
            </div>

            {/* <ContactForm /> */}
        </div>
    )
}

export default Contact