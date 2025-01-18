import React, { useState } from 'react'
import { easeIn, motion } from 'framer-motion'
import logo from '../assets/sample-logo.jpeg'
import pfp from '../assets/zay_portrait.jpg'
import { easeInOut } from 'framer-motion/dom';

function About() {

    const [readMore1, setReadMore1] = useState(false);
    const [readMore2, setReadMore2] = useState(false);

    const readMoreBtn1 = () => {
        setReadMore1(!readMore1);
    }
    const readMoreBtn2 = () => {
        setReadMore2(!readMore2);
    }


    return (
        <div id="about" className='flex flex-col lg:my-20 pb-30 lg:py-20  text-slate-400 tracking-tight'>

            <motion.div 
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 0.5 }}
             className='self-center mb-4 p-10 w-screen bg-indigo-700 bg-opacity-5'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.75 }}
                    className='bg-gradient-to-r from-emerald-400 from-50% via-slate-400 via-60% to-green-700 to-70% bg-clip-text text-transparent
                    font-thin text-center text-5xl lg:text-6xl tracking-wide my-auto p-2'>
                        About Me
                </motion.h2>
            </motion.div>

            <div className='flex flex-wrap flex-row-reverse my-4 justify-center lg:justify-start items-start text-md lg:text-lg'>
                {/* Picture div */}
                <div className='flex w-full lg:w-2/5 p-2 lg:pl-4 lg:pr-2 items-center justify-center'>
                    <motion.img 
                     initial={{ x: 300, opacity: 0}} 
                     whileInView={{ x: 0, opacity: 1}}
                     transition={{ duration: .75 }}
                     className='lg:mt-12 rounded-xl w-9/10 h-auto' src={pfp} alt="profile_pic" />
                </div>
                
                {/* Bio div */}
                <motion.div className='w-full flex flex-col lg:w-3/5 px-4'>
                    <motion.h3 
                     initial={{ x: -300, opacity: 0}} 
                     whileInView={{ x: 0, opacity: 1}}
                     transition={{ duration: 0.5 }} 
                     className='block lg:text-left py-6 text-4xl lg:text-5xl font-extralight 
                     bg-gradient-to-r from-green-400 via-fuchsia-200 to-green-700 bg-clip-text text-transparent'>
                        Who am I?
                    </motion.h3>
                    <motion.p 
                    initial={{ x: -300, opacity: 0}} 
                    whileInView={{ x: 0, opacity: 1}}
                    transition={{ duration: .5 }}
                    className='pb-6 pl-1'>
                        I’m an independent web developer with a BS in Cybersecurity & Information Assurance from Western Governors University. 
                        With over 2 years of experience in IT and a strong passion for continuous learning, I am dedicated to deepening my knowledge 
                        and enhancing my ability to deliver versatile and efficient tech solutions. 
                    </motion.p>

                    <motion.p 
                    initial={{ x: -300, opacity: 0}} 
                    whileInView={{ x: 0, opacity: 1}}
                    transition={{ duration: .5 }}
                    className='pb-6 pl-1'>
                        I hold several professional certifications in the operation, maintenance, and security of computer systems 
                        <a href="#certs" className='text-indigo-600 hover:text-indigo-900'> (view them here). </a> 
                        This expertise guides and underpins the development of all my websites, ensuring that industry-leading security practices are integrated at every phase, 
                        from concept to launch.   
                    </motion.p>


                    <div>
                        <motion.h3 
                         initial={{ x: -300, opacity: 0}} 
                         whileInView={{ x: 0, opacity: 1}}
                         transition={{ duration: .5 }} 
                         className='block lg:text-left py-6 text-4xl lg:text-5xl font-extralight 
                         bg-gradient-to-r from-green-400 via-fuchsia-200 to-green-700 bg-clip-text text-transparent'>
                            Cybersecurity
                        </motion.h3>

                        <motion.p
                        initial={{ x: -300, opacity: 0}} 
                        whileInView={{ x: 0, opacity: 1}}
                        transition={{ duration: .5 }}
                        className='pb-6 pl-1'>
                            Currently, I am seeking an entry-level role in the IT field (anywhere from cybersecurity to software engineering roles). 
                            I’m looking for an opportunity to apply, and improve upon, my knowledge and skills. My most valuable assets are 
                            my ability to learn and adapt quickly to new situations and develop creative and efficient methods to complete goals successfully.
                            My technical experience consists of:
                        </motion.p>

                        <motion.ul 
                         initial={{ x: -300, opacity: 0}} 
                         whileInView={{ x: 0, opacity: 1}}
                         transition={{ duration: .6 }}
                         className='pl-4 pb-1 text-base tracking-tighter text-slate-500 italic'>
                            <li className='pb-3'>
                                Developing and implementing a comprehensive risk management solution to avoid a common vulnerability for enterprises.
                            </li>
                            <li className='pb-3'>
                                Developing and implementing automation scripts to improve enterprise efficiency and security.                            
                            </li>
                            <li className='pb-3'>
                                Using nmap and wireshark to scan and monitor a network, identifying vulnerabilities and offering solutions in accordance with industry-standards.                            
                            </li>
                            <li className='pb-3'>
                                Performing simulated penetration tests and successfully exploiting vulnerable web applications using Hack The Box platform. Link
                            </li>
                        </motion.ul>

                        <motion.p
                         initial={{ x: -300, opacity: 0}} 
                         whileInView={{ x: 0, opacity: 1}}
                         transition={{ duration: .5 }}
                         className='pb-6 pl-1'>
                            Check out the <a href="#cyber-proj" className='text-indigo-600 hover:text-indigo-900'> Cybersecurity projects </a> section for more details.
                        </motion.p>
                    </div>

                    <div className='py-4'>
                        <motion.h3 
                         initial={{ x: -300, opacity: 0}} 
                         whileInView={{ x: 0, opacity: 1}}
                         transition={{ duration: 0.75 }} 
                         className='block lg:text-left py-6 text-4xl lg:text-5xl font-extralight 
                         bg-gradient-to-r from-green-400 via-fuchsia-200 to-green-700 bg-clip-text text-transparent'>
                            Programming
                        </motion.h3>

                        <motion.p
                        initial={{ x: -300, opacity: 0}} 
                        whileInView={{ x: 0, opacity: 1}}
                        transition={{ duration: .5 }}
                        className='pb-6 pl-1'>
                            Web development is my passion, and I am continuously seeking opportunities to enhance my skills and deliver even more refined solutions. 
                            If you’re looking to transform your ideas into a seamless online experience, contact me 
                            <a href="#contact" className='text-indigo-600 hover:text-indigo-900'> here. </a> 
                            You can take a look at some of my completed projects 
                            <a href="#web-proj" className='text-indigo-600 hover:text-indigo-900'> here.</a> 
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
