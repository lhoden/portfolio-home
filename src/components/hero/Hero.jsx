import React from 'react';
import HeroImage from '../../assets/gojo.jpg';
import './Hero.css';


const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-16'>
            <img 
                src={HeroImage} 
                alt=""
                className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" 
            />
            {/* <h1 className="text-4x1 font-bold">
                I'm {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Your mom</span>
                , Full-Stack Developer
            </h1> */}
            <h1 className="text-4x1 font-bold">
                I'm {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Gojo</span>
                , hahahahahaha
            </h1>
            {/* <p className="mt-4 text-lg text-gray-300">
                I specialize in building modern and responsive web applications.
            </p> */}
            <p className="mt-4 text-lg text-gray-300">
                I specialize in domain expansion.
            </p>
            <div className="mt-8 space-x-4">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white md-inline
                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact Me</button>
                <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white md-inline
                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">CV</button>
            </div>
        </div>
    );
}

export default Hero;