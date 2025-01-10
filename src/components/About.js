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
        <div id="about" className='flex flex-col lg:my-20 py-20 text-slate-400 tracking-tight'>

            <div className='self-center mb-4 p-10 w-screen bg-indigo-700 bg-opacity-15'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.75 }}
                    className='bg-gradient-to-r from-emerald-400 from-50% via-slate-400 via-60% to-green-700 to-70% bg-clip-text text-transparent
                    font-thin text-center text-5xl lg:text-6xl tracking-wide my-auto p-2'>
                        Who am I?
                </motion.h2>
            </div>

            <div className='flex flex-wrap flex-row-reverse my-4 justify-center lg:justify-start items-start text-md lg:text-lg'>
                {/* Picture div */}
                <div className='flex w-full my-auto lg:w-2/5 lg:pl-4 lg:pr-2 items-center justify-center'>
                    <motion.img 
                     initial={{ x: 300, opacity: 0}} 
                     whileInView={{ x: 0, opacity: 1}}
                     transition={{ duration: 1 }}
                     className='my-4 lg:mt-2 lg:mb-10 rounded-2xl w-9/10 h-auto' src={pfp} alt="profile_pic" />
                </div>

                {/* Bio div */}
                <motion.div className='w-full flex flex-col lg:w-3/5 px-4'>
                    <motion.p 
                    initial={{ x: -300, opacity: 0}} 
                    whileInView={{ x: 0, opacity: 1}}
                    transition={{ duration: 1 }}
                    className='pb-6'>
                        I’m a recent cybersecurity graduate and an independent web developer. I have a BS in Cybersecurity & Information Assurance 
                        from Western Governors University and over seven industry recognized certifications in the IT field including 
                        the CompTIA Security+, Network+, CySA+ and more. 
                    </motion.p>

                    {/* readmore1 conditional view */}
                    {!readMore1 ? 
                    (<div>
                        <motion.button
                        initial={{ x: -300, opacity: 0}} 
                        whileInView={{ x: 0, opacity: 1}}
                        transition={{ duration: 1 }}
                        className='pb-2 text-slate-500 duration-200 ease-in-out hover:text-slate-800 transition-colors'
                        onClick={readMoreBtn1}>
                            Click here if you want to read more about my story
                        </motion.button>
                    </div>) : 
                    (<div>
                        <motion.p 
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.3, ease: "easeInOut"}}
                         className='pb-2'>
                            Tell my background story of how I got into tech and stuff.
                        </motion.p>

                        <motion.button
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.3, ease: "easeInOut"}}
                        className='pb-2 text-slate-500 duration-200 ease-in-out hover:text-slate-800 transition-colors'
                        onClick={readMoreBtn1}>
                            Show less
                        </motion.button>
                    </div>)}

                    <motion.p 
                    initial={{ x: -300, opacity: 0}} 
                    whileInView={{ x: 0, opacity: 1}}
                    transition={{ duration: 1 }}
                    className=' my-4'>
                        I’ve recently begun freelance work, developing full-stack websites for clients. If you’re interested, 
                        check out my Fiverr here, look at some of my previous work&nbsp;
                        <a href="#cyber-proj" className=' text-purple-700 hover:text-blue-600 active:text-blue-900 
                        transition-colors duration-150'>here</a>, or contact me&nbsp;
                        <a href="#contact" className=' text-purple-700 hover:text-blue-600 active:text-blue-900 
                        transition-colors duration-150'>here.</a>
                    </motion.p>

                    {/* readmore2 conditional view */}
                    {!readMore2 ? 
                    (<div>
                        <motion.button
                        initial={{opacity: 0}} 
                        whileInView={{ x: 0, opacity: 1}}
                        transition={{ duration: 1 }}
                        className='pb-2 text-slate-500 duration-200 ease-in-out hover:text-slate-800 transition-colors'
                        onClick={readMoreBtn2}>
                            Read more
                        </motion.button>
                    </div>) : 
                    (<div>
                        <motion.p 
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.3, ease: "easeInOut"}}
                        className='pb-2'>
                            More about skills and xp.
                        </motion.p>

                        <motion.button
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.3, ease: "easeInOut"}}
                        className='pb-2 text-slate-500 duration-200 ease-in-out hover:text-slate-800 transition-colors'
                        onClick={readMoreBtn2}>
                            Show less
                        </motion.button>
                    </div>)}

                    <motion.p 
                    initial={{ x: -100, opacity: 0}} 
                    whileInView={{ x: 0, opacity: 1}}
                    transition={{ duration: 1 }}
                    className='my-4'>
                        I’m currently seeking an entry level role in the computer/IT field. I have skills and experience with software 
                        that is commonly used within the industry. Check out some projects that display this here.
                    </motion.p>
                </motion.div>
            </div>

        </div>
    )
}

export default About
