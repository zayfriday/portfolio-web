import React from 'react'
import { motion } from "framer-motion"
import logo from '../assets/sample-logo.jpeg'
import wgu_cap from '../assets/PGSBPP.pdf'
import wgu_cap_pic from '../assets/PGSBPP_thumb.png'
import mcjm_pic from '../assets/MCJM_thumb.png'

function Projects() {
    return (
        <div id="projects" className='flex flex-col items-start lg:my-20 py-20 text-slate-400'>

            <motion.div 
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 0.5 }}
             className='self-center mb-4 p-10 w-screen bg-indigo-700 bg-opacity-15'>
                <motion.h2
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -100 }}
                 transition={{ duration: 0.5 }}
                 className='bg-gradient-to-r from-emerald-400 from-50% via-slate-400 via-60% to-green-700 to-70% bg-clip-text text-transparent
                 font-thin text-center text-5xl lg:text-6xl tracking-wide my-auto p-2'>
                    Projects
                </motion.h2>
            </motion.div>


            {/* PROGRAMMING HEADER */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                initial={{ opacity: 0, y: -50, x: -200 }}
                transition={{ duration: 0.8 }}
                className='block text-left px-4 py-6 mt-8 text-5xl font-extralight
                 bg-gradient-to-r from-green-400 via-fuchsia-200 to-green-700 bg-clip-text text-transparent'>
                Programming
            </motion.h2>

            <div id="web-proj" className='flex flex-wrap items-start justify-center lg:justify-start'>
                {/* picture div */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -300 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.05, transition: 0.2 }}
                    whileTap={{ scale: 1.03 }}
                    className='relative my-auto px-3 py-5 flex justify-center items-center w-full lg:w-2/5 aspect-w-14 aspect-h-8'>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img className='rounded-[10px] w-full h-auto lg:min-h-72 object-fill' src={mcjm_pic} alt="mcjm_thumnail" />
                    </a>
                </motion.div>
                {/* info div */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 300 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-3/5 flex flex-col py-8 pl-6'>
                    <motion.h3 className='pb-8 lg:px-8 text-2xl lg:text-3xl font-medium'>
                        Full-Stack Website
                    </motion.h3>

                    <div className='flex flex-col gap-3 lg:px-10 text-base lg:text-lg tracking-tight font-light'>
                        <motion.p>
                            Created a full-stack website for a moving and junk removal company, utilizing React for a dynamic and responsive user interface.
                        </motion.p>
                        <motion.p>
                            Integrated APIs for real-time data interaction, enabling users to receive quotes,
                            upload images, and receive automated email notifications upon form submission.
                        </motion.p>
                        <motion.p>
                            Developed a visually appealing client gallery showcasing past work, pulling images from the cloud,
                            with a polished, animated UI for enhanced user experience across devices.
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            <motion.div className='w-full border-b border-slate-700 border-opacity-50 pb-12' />

            {/* CYBERSECURITY HEADER */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                initial={{ opacity: 0, y: -50, x: -200 }}
                transition={{ duration: 0.8 }}
                className='block text-left px-4 py-6 mt-8 text-5xl font-extralight
                 bg-gradient-to-r from-green-400 via-fuchsia-200 to-green-700 bg-clip-text text-transparent'>
                Cybersecurity
            </motion.h2>

            <div id="web-proj" className='flex flex-wrap items-start justify-center lg:justify-start'>
                {/* picture div */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -300 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.05, transition: 0.2 }}
                    whileTap={{ scale: 1.03 }}
                    className='relative group my-auto px-3 py-5 flex justify-center items-center w-full lg:w-2/5 aspect-w-14 aspect-h-8'>
                    {/* thumbnail and link to download pdf */}
                    <a href={wgu_cap} target="_blank" download="PGSBPP.pdf" rel="noopener noreferrer">
                        <img className='rounded-[10px] w-full min-h-72 max-h-112 object-fill' src={wgu_cap_pic} alt="cap_proj_thumb" />
                    </a>

                    {/* Tooltip */}
                    <span className="absolute z-5 hidden group-hover:inline-block top-1/4 left-1/2 bg-gray-700 py-2 px-4 text-white text-sm rounded">
                        Click to download
                    </span>

                </motion.div>
                {/* info div */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 300 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-3/5 flex flex-col py-8 pl-6'>
                    <motion.h3 className='pb-8 lg:px-8 text-2xl lg:text-3xl font-medium'>
                        Using Automation to Boost Enterprise Cybersecurity Posture
                    </motion.h3>

                    <div className='flex flex-col gap-3 lg:px-10 text-base lg:text-lg tracking-tight font-light'>
                        <motion.p>
                            Designed and implemented a comprehensive password policy to address weak-password vulnerabilities
                            in enterprise environments, emphasizing cybersecurity best practices.
                        </motion.p>
                        <motion.p>
                            Created Linux-based automation scripts to generate secure passwords, streamline account creation, and update passwords,
                            ensuring alignment with the policy and bolstering organizational security.
                        </motion.p>
                        <motion.p>
                            Designed scripts to handle large-scale account management, providing detailed error reporting and success
                            notifications to ensure smooth implementation and compliance.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects


