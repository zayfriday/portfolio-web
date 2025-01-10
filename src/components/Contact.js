import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    return (
        <div id="contact" className='flex flex-col mt-10 lg:mt-20 pt-10 pb-4'>

            <div className='self-center mb-4 p-10 w-screen bg-indigo-700 bg-opacity-15'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.75 }}
                    className='bg-gradient-to-r from-emerald-400 from-50% via-slate-400 via-60% to-green-700 to-70% bg-clip-text text-transparent
                    font-thin text-center text-5xl lg:text-6xl tracking-wide my-auto p-2'>
                        Reach Me
                </motion.h2>
            </div>

            <div className='flex flex-wrap justify-evenly text-xl font-light text-slate-500 tracking-tight w-full gap-2 pt-10 mt-10'>
                <motion.p 
                 whileInView={{ opacity: 1, x: 0 }} 
                 initial={{ opacity: 0, x: -100 }} 
                 transition={{ duration: 1 }}
                 className='p-2'>
                    Email me: <a>zayfriday1@gmail.com</a>
                </motion.p>
                <motion.p 
                 whileInView={{ opacity: 1, x: 0 }} 
                 initial={{ opacity: 0, x: -100 }} 
                 transition={{ duration: 1 }}
                 className='p-2'>
                    <a>Check out my Fiverr account here!</a>
                </motion.p>
            </div>

            {/* Send message div */}
            <motion.div 
             whileInView={{ y: 0, opacity: 1}}
             initial={{ y: 100, opacity: 0}}
             transition={{ duration: 1.5 }}
             className="pt-8 flex justify-center items-center">
                {/* Form container */}
                <form className="border-t border-b border-slate-400 bg-transparent rounded-md p-6 w-full lg:w-3/4">
                    <h2 className="text-4xl text-center mb-6 font-extralight
                     bg-gradient-to-r from-green-400 via-fuchsia-200 to-green-700 bg-clip-text text-transparent">
                        Send a Message
                    </h2>

                    <div className="mb-4 ">
                        <label name="name" className="block text-sm">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-2 text-black w-full border border-emerald-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 text-black w-full border border-emerald-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="mt-1 p-2 text-black w-full h-32 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-emerald-700 text-white-400 py-2 px-6 rounded-md transition-all duration-300 hover:bg-blue-500 active:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </motion.div>

        </div>
    )
}

export default Contact