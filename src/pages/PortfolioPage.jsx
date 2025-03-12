import React from 'react';
import Project from '../components/ProjectComponent';
import '../components/ProjectComponent.css';

const projects = [
    {
        title: 'Little Book Keeper',
        imageUrl: 'https://i.postimg.cc/4yN1g2JL/little-Book-Keeper.jpg',
        description: 'A simple bookkeeping app to help you keep track of your reading',
        projectLink: 'https://github.com/sammijeann/little-book-keeper'
    },
    {
        title: 'Outerplates',
        imageUrl: 'https://i.postimg.cc/T3rfztpv/outerplates.jpg',
        description: 'Outerplates is a 1-4 Player Couch Co-Op Action Game where competing teams of astronauts have been sent to colonize recently discovered planets. In order to do so, the teams must compete to appease the native apex predator by cooking their favorite meals before they can finally plant their flag.Cook your way to the beast’s heart and expand your galactic empire!',
        projectLink: 'https://sammiteel.squarespace.com/portfolio/outerplates'
    },
    {
        title: 'Overlook',
        imageUrl: 'https://i.postimg.cc/9Mhk4q56/overlook.jpg',
        description: 'A command-line driven app for managers to view and manage the departments, roles, and employees in their company.',
        projectLink: 'https://github.com/sammijeann/overlook'
    },
];

console.log(projects[0].imageUrl);

const Portfolio = () => {
    return (
        <section className="container">
            <h1 className="text-center p-3">My Projects</h1>
            <div className="portfolio grid-container">
                {projects.map((project, index) => (
                    <Project 
                        key={index}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        description={project.description}
                        projectLink={project.projectLink}
                    />
                    
                ))}
            </div>
        </section>
        
    );
};

export default Portfolio;
