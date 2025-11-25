import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav id="topNav" className='bg-black text-white px-8 md:px' style={{display: 'flex', justifyContent: 'center'}}>
            <div className='container py-2 flex justify-center md:justify-between items-center'>
                <div className='text-2x1 font-bold hidden md:inline'>Lauren's Portfolio</div>
                <div className='space-x-6'>
                    <a href="#about-me" className='hover:text-gray-400'>About Me</a>
                    <a href="#experience" className='hover:text-gray-400'>Experience</a>
                    <a href="#projects" className='hover:text-gray-400'>Projects</a>
                    <a href="#contact" className='hover:text-gray-400'>Contact</a>
                </div>
                <a href="https://github.com/lhoden">
                    <button 
                        className='bg-gradient-to-r from-green-400 to-blue-500 text-white md-inline
                        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
                    >
                        GitHub Account
                    </button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;