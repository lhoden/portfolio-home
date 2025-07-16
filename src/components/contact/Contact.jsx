import React from 'react';
import {FaEnvelope, FaPhone, FaMapMarkedAlt} from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <h1 className="text-3x1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">Let's Talk</h1>
                        <p>I'm open to discussing more about anime.</p>
                        <div className="mb-4 mt-8">
                            <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
                            <a href="mailto:youremail@example.com" className="hover:underline">
                                gojosemail@example.com
                            </a>
                        </div>
                        <div className="mb-4 mt-8">
                            <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
                            <span>+1800calgojo</span>
                        </div>
                        <div className="mb-4 mt-8">
                            <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
                            <span>street, city, province, country</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" 
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" 
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea type="text" 
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    rows="5"
                                    placeholder="Enter your message"
                                />
                            </div>
                            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white md-inline
                                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;