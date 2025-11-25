import React from 'react';
import disney from '../../assets/disney.jpg';
import pearson from '../../assets/pearson-building.jpg';
import caremesh from '../../assets/caremesh.jpg';
import sas from '../../assets/sas.jpg';
import certain from '../../assets/certain.jpg';
import intuit from '../../assets/intuit.jpg';

const services = [
    {
      id: 1,
      title: "The Walt Disney Company",
      image: disney,
      link: "https://www.disneyplus.com/welcome",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "Pearson",
      image: pearson,
      link: "https://mycourses.pearson.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "CareMESH",
      image: caremesh,
      link: "https://www.caremesh.com/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      title: "SAS Institute",
      image: sas,
      link: "https://www.sas.com/en_us/home.html",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      title: "Certain",
      image: certain,
      link: "https://certain.com/#",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 6,
      title: "Intuit",
      image: intuit,
      link: "https://www.intuit.com/",
      description: "Worked on an app called MedFusion which became Intuit Health",
    },
];

const Service = () => {
    return (
    <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 id="experience" className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div 
                        key={service.id}
                        className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
                        transition-transform duration-300 hover:scale-105"
                    >
                        <a href={service.link} target="_blank">
                          <h3 className="mt-3 mb-3 text-2x1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                              {service.title}
                          </h3>
                          <img src={service.image} className="rounded-lg mb-4
                          w-full h-48 object-cover" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Service;