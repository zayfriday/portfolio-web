import React from 'react'
import { motion } from 'framer-motion'
import degree_pic from '../assets/degree_ss.png'

function Qualifications() {
    return (
        <div id="qual" className='lg:mt-20 pb-10 lg:pb-20 flex flex-col items-center text-base lg:text-lg'>

            <div className='w-full flex justify-center justify-self-center'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.75 }}
                    className='bg-gradient-to-r from-violet-700 from-40% to-purple-400 to-55% bg-clip-text text-transparent
                    font-semibold text-center text-5xl lg:text-6xl tracking-wide p-2 my-8'>
                        Qualifications
                </motion.h2>
            </div>

            <div className='w-full flex flex-col items-center text-center pb-5'>
                <motion.h4 
                 initial={{ y: -100, opacity: 0}} 
                 whileInView={{ y: 0, opacity: 1}}
                 transition={{ duration: 1 }} 
                 className='block lg:text-left pt-6 pb-2 text-4xl lg:text-5xl font-extralight 
                 bg-gradient-to-r from-green-400 via-fuchsia-200 to-green-700 bg-clip-text text-transparent'>
                    Education
                </motion.h4>

                <a id="degree" className='relative group w-full lg:w-4/5 p-2 flex justify-center items-center'>
                    <motion.img 
                     initial={{ x: -100, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{ duration: 1 }} 
                     src={degree_pic} className='w-5/7 lg:w-5/6 h-auto mt-4 pb-4 rounded-sm' alt='degree_pic'/>

                    {/* Tooltip */}
                    {/* <span className="absolute z-5 hidden group-hover:inline-block top-0 right-0 mt-2 bg-gray-700 py-2 px-4 text-white text-sm rounded">
                        Click to open in new tab
                    </span>                    */}
                </a>

                <motion.h4
                 initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1.1 }}
                 className='text-xl lg:text-2xl mt-3 pb-1'>
                    B.S. in Cybersecurity & Information Assurance
                </motion.h4>
                <motion.p
                 initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1.15 }} 
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

            <motion.div id="certs" className='w-full border-b border-slate-700 border-opacity-50 py-2' /> 

            {/* Certifications view, 2 columns for lg screen, 1 for smaller  */}
            <motion.h4 
                 initial={{ y: -100, opacity: 0}} 
                 whileInView={{ y: 0, opacity: 1}}
                 transition={{ duration: 0.75 }} 
                 className='block lg:text-left py-5 text-4xl lg:text-5xl font-extralight 
                 bg-gradient-to-r from-green-400 via-fuchsia-200 to-green-700 bg-clip-text text-transparent'>
                    Certifications
            </motion.h4>

            <div className='w-full lg:w-4/7 flex flex-wrap px-2 py-2'>
                <div className='w-full lg:w-1/2 flex flex-col pb-4 items-center text-center'>
                    <motion.h4
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-xl'>
                            <a className='text-slate-600 italic tracking-tight'>CompTIA, </a> PenTest+
                    </motion.h4>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-slate-700 italic'>
                        Nov 2024
                    </motion.p>
                </div>
                <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                    <motion.h4
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-lg'>
                       <a className='text-gray-600 italic'>CompTIA, </a>CySA+
                    </motion.h4>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-gray-700'>
                        Sep 2024
                    </motion.p>
                </div>
                <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                    <motion.h4
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-lg'>
                       <a className='text-gray-600 italic'>CompTIA, </a>Project+
                    </motion.h4>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-gray-600'>
                        Aug 2024
                    </motion.p>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col pb-4 items-center text-center p-2'>
                    <motion.h4
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-lg'>
                            <a className='text-slate-600 italic tracking-tight'>Linux Profesional Institute, </a> Linux Essentials
                    </motion.h4>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-slate-700'>
                        May 2024
                    </motion.p>
                </div>
                <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                    <motion.h4
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-lg'>
                            <a className='text-gray-600 italic'>CompTIA, </a>Security+
                    </motion.h4>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-gray-700'>
                            May 2024
                    </motion.p>
                </div>
                <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                    <motion.h4
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-lg'>
                            <a className='text-gray-600 italic'>CompTIA, </a>Network+
                    </motion.h4>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-gray-700'>
                            Dec 2023
                    </motion.p>
                </div>
                <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                    <motion.h4
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-lg'>
                            <a className='text-gray-600 italic'>CompTIA, </a>A+
                    </motion.h4>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='tracking-tighter text-sm text-gray-700'>
                            Aug 2023
                    </motion.p>
                    <div className='w-full lg:w-1/2 text-lg flex flex-col pb-4 items-center p-2'>
                        <motion.h4
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='text-lg'>
                                <a className='text-gray-600 italic tracking-tight'>Axelos, </a>ITIL Foundation
                        </motion.h4>
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