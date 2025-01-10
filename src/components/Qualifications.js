import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import degree_pic from '../assets/degree_ss.png'

function Qualifications() {
    return (
        <div id="qual" className='lg:my-20 py-20 flex flex-col items-center text-slate-300 text-md lg:text-lg'>

            <div className='mb-20 p-12 w-full bg-gradient-to-r from-transparent from-35% via-fuchsia-900 via-55% to-transparent to-85% 
            border-t-2 border-b border-slate-500 border-opacity-10 rounded-lg'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.75 }}
                    className='bg-gradient-to-r from-emerald-400 to-green-700 bg-clip-text text-transparent
                    font-thin text-center text-5xl lg:text-6xl tracking-wide my-auto p-4'>
                        Qualifications
                </motion.h2>
            </div>

            <div className='w-full flex flex-col items-center text-center pb-10'>
                <motion.h2
                 whileInView={{ opacity: 1, y: 0 }} 
                 initial={{ opacity: 0, y: -100 }} 
                 transition={{ duration: 0.8 }}
                 className='my-4 pt-4 pb-2 block
                 bg-gradient-to-r from-emerald-400 via-fuchsia-200 to-violet-700 bg-clip-text text-transparent text-4xl lg:text-5xl font-light'>
                    Education
                </motion.h2>

                <motion.img 
                 initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.85 }}
                 src={degree_pic} className='w-3/5 h-auto mt-6 pb-4 rounded-sm' alt='degree_pic'/>

                <motion.h3
                 initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1 }}
                 className='text-xl lg:text-2xl mt-3 pb-1'>
                    B.S. in Cybersecurity & Information Assurance
                </motion.h3>
                <motion.p
                 initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1.1 }}
                 className='font-normal text-lg text-slate-500'>
                    Western Governors University
                </motion.p>
                <motion.p
                 initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1.2 }}
                 className='tracking-tight text-base text-slate-700 italic'>
                    Jan 2023 - Dec 2024
                </motion.p>
            </div>

            <motion.div className='w-full border-b border-slate-700 border-opacity-50 pb-12' /> 

            <motion.h2
             whileInView={{ opacity: 1, y: 0 }} 
             initial={{ opacity: 0, y: -100 }} 
             transition={{ duration: 0.8 }}
             className='my-4 py-4 block
             bg-gradient-to-r from-emerald-400 via-fuchsia-200 to-violet-700 bg-clip-text text-transparent text-4xl lg:text-5xl font-light'>
                Certifications
            </motion.h2>

            {/* Certifications view, 2 columns for lg screen, 1 for smaller  */}
            <div className='w-full lg:w-4/7 flex flex-wrap px-4 py-2'>

                <div className='w-full lg:w-1/2 flex flex-col pb-4 items-center text-center p-2'>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-xl'>
                            <a className='text-slate-600 italic tracking-tight'>CompTIA, </a> PenTest+
                    </motion.h3>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-slate-700 italic'>
                        Nov 2024
                    </motion.p>
                </div>

                <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-lg'>
                       <a className='text-gray-600 italic'>CompTIA, </a>CySA+
                    </motion.h3>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-gray-700'>
                        Sep 2024
                    </motion.p>
                </div>

                <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-lg'>
                       <a className='text-gray-600 italic'>CompTIA, </a>Project+
                    </motion.h3>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-gray-600'>
                        Aug 2024
                    </motion.p>
                </div>

                <div className='w-full lg:w-1/2 flex flex-col pb-4 items-center text-center p-2'>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-xl'>
                            <a className='text-slate-600 italic tracking-tight'>Linux Profesional Institute, </a> Linux Essentials
                    </motion.h3>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-slate-700'>
                        May 2024
                    </motion.p>
                </div>

                <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-lg'>
                       <a className='text-gray-600 italic'>CompTIA, </a>Security+
                    </motion.h3>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-gray-700'>
                        May 2024
                    </motion.p>
                </div>

                <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-lg'>
                       <a className='text-gray-600 italic'>CompTIA, </a>Network+
                    </motion.h3>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-gray-700'>
                        Dec 2023
                    </motion.p>
                </div>

                <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-lg'>
                       <a className='text-gray-600 italic'>CompTIA, </a>A+
                    </motion.h3>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-gray-700'>
                        Aug 2023
                    </motion.p>

                    <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                        <motion.h3
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='text-lg'>
                       <a className='text-gray-600 italic'>Axelos, </a>ITIL Foundation
                        </motion.h3>
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            className='tracking-tighter text-sm text-gray-700'>
                            Feb 2023
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qualifications