import React, { useState } from 'react'
import { motion } from 'framer-motion'
import DOMPurify from 'dompurify'

function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [status, setStatus] = useState(""); // To show email status

    const sanitizeInput = (input) => {
        const cleanInput = DOMPurify.sanitize(input);
        return cleanInput;
    };


    const validateName = (e) => {
        const { value } = e.target;
        const matchPattern = /^[a-zA-Z\s]*$/; // Allows only letters and spaces
        if (matchPattern.test(value)) {
          sanitizeInput(value);
          setName(value); // Update state if input matches the regex
        }
    }
    const validateEmail = (e) => {
        const { value } = e.target;
        // input sanitization + validation here
        sanitizeInput(value);
        setEmail(value); // only after sanitization and validation

    }
    const validateMessage = (e) => {
        const { value } = e.target;
        // input sanitization + validation here 
        sanitizeInput(value);
        setMessage(value); // only after sanitization and validation
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validation for submission to be completed
        if (!email || !message) {
            setError("Please fill out all required fields");
            console.log(error);
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // ensures proper email format
        if (!emailRegex.test(email)){
            setError("Improper email format");
            console.log(error);
            return;
        }

        // AFTER VALIDATION prepare the form data to be sent to the serverless function
        const formData = { email, message };

        try {
          // Send form data to Netlify serverless function
          const response = await fetch("/.netlify/functions/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), //converts state variables to JSON data to be accessed by serverless function
          });
    
          const result = await response.json();
          if (response.status === 200) {
            setStatus("Emails sent successfully!");
          } else {
            setStatus("Failed to send emails. Please try again.");
          }
        } catch (error) {
            console.error("Error:", error);
            setStatus("An error occurred. Please try again.");
        }

        //   // Handle the server's response
        //   if (response.ok) {
        //     setSubmitted(true);  // If the submission is successful, update the state
        //     setError(null);      // Clear any previous errors
        //   } else {
        //     setError(result.error || "Something went wrong!");  // Display error message if failed
        //     setSubmitted(false);
        //   }

        //   // Optionally, clear the form fields after submission
        //   setName('');
        //   setEmail('');
        //   setMessage('');
        // } catch (error) {
        //   // Handle any network or fetch errors
        //   setError("Network error: Unable to submit the form.");
        // }
    }


    return (
        <div className='pt-8'>
            <motion.div 
             whileInView={{ y: 0, opacity: 1}}
             initial={{ y: 100, opacity: 0}}
             transition={{ duration: 1.5 }}
             className="flex justify-center items-center">
                {/* Form container */}
                <form className="border-t border-b border-slate-400 bg-transparent rounded-md p-6 w-full lg:w-3/4" onSubmit={handleSubmit}>
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
                            value={name}
                            onChange={validateName}
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
                            value={email}
                            onChange={validateEmail}
                            required
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
                            value={message}
                            onChange={validateMessage}
                            required
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
                        { error && <p className='py-3 text-lg text-red-500'></p>}
                    </div>
                </form>
            </motion.div>

        </div>
    )
}

export default ContactForm;