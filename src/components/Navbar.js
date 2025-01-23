import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from "react-icons/fa"
// import { Link, Element } from 'react-scroll';


function Navbar() {

    const nav_item = {
        whileHover: {scale: 1.2},
        whileTap: {scale: 1.1}
    }
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                {/* <img className='mx-2 w-10' src={logo} alt="logo"/> */}
                <ul className='flex items-center justify-around lg:mx-2 gap-3 lg:gap-4 tracking-tighter text-lg lg:text-2xl
                 bg-gradient-to-r from-green-300 to-green-700 bg-clip-text text-transparent'>
                    <motion.li>
                        <a className="hover:text-purple-500 active:text-blue-900" href="#hero">Home</a>
                    </motion.li>
                    <motion.li>
                        <a className="hover:text-purple-500 active:text-blue-900" href="#about">About</a>
                    </motion.li>
                    <motion.li>
                        <a className="hover:text-purple-500 active:text-blue-900" href="#projects">Projects</a>
                    </motion.li>
                    <motion.li>
                        <a className="hover:text-purple-500 active:text-blue-900" href="#contact">Contact</a>
                    </motion.li>
                </ul>
            </div>

            <div className='lg:m-8 m-3 flex items-center justify-center gap-2 text-xl lg:text-3xl'>
                <a className='hover:opacity-50 active:opacity-70' href='https://www.linkedin.com/in/ifriday' taget="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-blue-700'/>
                </a>
                <a className='hover:opacity-50 active:opacity-70' href='https://github.com/zayfriday' taget="_blank" rel="noopener noreferrer">
                    <FaGithub className='text-neutral-700'/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar