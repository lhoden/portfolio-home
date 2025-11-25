import React from 'react';
import ecommerce from '../../assets/camera-ecommerce.png';
import aiPalette from '../../assets/ai-palette-generator.png';
import kaggleBI from '../../assets/kaggle-app-preview.png';

const projects = [
    {
        id: 1,
        name: "Ecommerce Site with Stripe",
        technologies: "An ecommerce site written in React, Vite, Tailwind that leverages Stripe for secure customer payments.",
        image: ecommerce,
        link: "http://3.144.186.183:3000/",
        github: "https://github.com/lhoden/vite-ecommerce"
    },
    {
        id: 2,
        name: "AI Color Palette Generator with AWS Bedrock",
        technologies: "An application allowing users to prompt Mistral AI using AWS Bedrock to generate color palettes based on descriptions.",
        image: aiPalette,
        link: "http://52.14.75.223:3000/",
        github: "https://github.com/lhoden/color-swatch-ai"
    },
    {
        id: 3,
        name: "BI Data Visualization using Kaggle",
        technologies: "A data visualization example using am5charts, React, and real ecommerce data imported from a live customer user base using Kaggle.",
        image: kaggleBI,
        link: "http://18.222.197.94:3000/",
        github: "https://github.com/lhoden/data-visualization-ecommerce"
    }
]

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 id="projects" className="text-4xl font-bold text-center mb-12">Portfolio Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
                    transform transition-transform duration-300 hover:scale-105">
                        <a href={project.link} target="_blank">
                            <img src={project.image} alt={project.name} className="rounded-lg mb-4
                            w-full h-84 object-cover" />
                            <h3 className="text-2x1 font-bold mb-2">{project.name}</h3>
                            <p className="text-gray-400 mb-4">{project.technologies}</p>
                        </a>
                        <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">See GitHub Repo</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects;