import React from 'react'
import { motion } from 'framer-motion'
import pfp from '../assets/zay_portrait.jpg'
import resume from '../assets/TechResume.pdf'
import resume_pic from '../assets/TechResume.png'
import { BsArrowUpRightCircle } from 'react-icons/bs'


function About() {


    return (
        <div id="about" className='flex flex-col lg:my-20 pb-30 lg:py-20 text-slate-400 tracking-tight'>

            <div className='w-full flex justify-center justify-self-center'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.75 }}
                    className='bg-gradient-to-r from-violet-700 from-40% to-purple-400 to-55% bg-clip-text text-transparent
                    font-semibold text-center text-5xl lg:text-6xl tracking-wide p-2 my-8'>
                    About Me
                </motion.h2>
            </div>

            <div className='flex flex-wrap flex-row-reverse my-4 justify-center lg:justify-start items-start text-lg lg:text-lg'>
                {/* Picture div */}
                <div className='flex flex-col gap-4 w-full lg:w-2/5 p-2 lg:pl-4 lg:pr-2 items-center justify-center'>
                    <motion.img
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .75 }}
                        className='lg:mt-12 rounded-xl w-9/10 h-auto' src={pfp} alt="profile_pic"
                    />
                    <motion.a 
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        href={resume} 
                        target="_blank" 
                        download="TechResume.pdf" 
                        rel="noopener noreferrer" 
                        className='flex items-center text-indigo-500 hover:text-indigo-900 gap-2 lg:text-left py-6 text-2xl lg:text-3xl'>
                            <motion.h4
                            >
                                View Resume
                            </motion.h4>
                            <BsArrowUpRightCircle size={25}/>
                    </motion.a>
                </div>

                {/* Bio div */}
                <motion.div className='w-full flex flex-col lg:w-3/5 px-4'>
                    <motion.h3
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='block lg:text-left py-6 text-4xl lg:text-5xl font-extralight 
                        bg-gradient-to-r from-green-400 via-fuchsia-200 to-green-700 bg-clip-text text-transparent'>
                        Who am I?
                    </motion.h3>
                    <motion.p
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='pb-6 pl-1'>
                        I’m an independent web developer with a BS in Cybersecurity & Information Assurance from Western Governors University.
                        With over 2 years of experience in IT and a strong passion for continuous learning, I am dedicated to deepening my knowledge
                        and enhancing my ability to deliver versatile and efficient tech solutions.
                    </motion.p>

                    <motion.p
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='pb-6 pl-1'>
                        I hold several professional certifications in the operation, maintenance, and security of computer systems
                        <a href="#certs" className='text-indigo-600 hover:text-indigo-900'> (view them here). </a>
                        This expertise guides and underpins the development of all my websites, ensuring that industry-leading security practices are integrated at every phase,
                        from concept to launch.
                    </motion.p>


                    <div>
                        <motion.h3
                            initial={{ x: -300, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='block lg:text-left py-6 text-4xl lg:text-5xl font-extralight 
                         bg-gradient-to-r from-green-400 via-fuchsia-200 to-green-700 bg-clip-text text-transparent'>
                            Cybersecurity
                        </motion.h3>

                        <motion.p
                            initial={{ x: -300, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='pb-6 pl-1'>
                            Currently, I am seeking an entry-level role in the IT field (anywhere from cybersecurity to software engineering roles).
                            I’m looking for an opportunity to apply, and improve upon, my knowledge and skills. My most valuable assets are
                            my ability to learn and adapt quickly to new situations and develop creative and efficient methods to complete goals successfully.
                            My technical experience consists of:
                        </motion.p>

                        <motion.ul
                            initial={{ x: -300, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='pl-4 pb-1 tracking-tighter text-slate-500 italic font-bold'>
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
                            initial={{ x: -300, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='pb-6 pl-1'>
                            Check out the <a href="#cyber-proj" className='text-indigo-600 hover:text-indigo-900'> Cybersecurity projects </a> section for more details.
                        </motion.p>
                    </div>

                    <div className='py-4'>
                        <motion.h3
                            initial={{ x: -300, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='block lg:text-left py-6 text-4xl lg:text-5xl font-extralight 
                            bg-gradient-to-r from-green-400 via-fuchsia-200 to-green-700 bg-clip-text text-transparent'>
                            Programming
                        </motion.h3>

                        <motion.p
                            initial={{ x: -300, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='pb-6 pl-1'>
                            In addition to IT, I also have exprience with independent web development. This includes:
                        </motion.p>

                        <motion.ul
                            initial={{ x: -300, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='pl-4 pb-1 tracking-tighter font-bold text-slate-500 italic'>
                            <li className='pb-3'>
                                Website development with React and Next.js, and API integration with MongoDB and Firestote databases
                                to implement full stack capabilities.
                            </li>
                            <li className='pb-3'>
                                Using framer motion to animate designs, further enhancing the user experience.
                            </li>
                            <li className='pb-3'>
                                Utilizing Nmap, Nikto, OWASP ZAP, and other scanning tools to test and enhance the security of
                                wesbites.
                            </li>
                        </motion.ul>

                        <motion.p
                            initial={{ x: -300, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
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
