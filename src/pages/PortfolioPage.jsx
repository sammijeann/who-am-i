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
        description: 'Outerplates is a 1-4 Player Couch Co-Op Action Game',
        projectLink: 'https://sammiteel.squarespace.com/portfolio/outerplates'
    },
    // Add more projects as needed
];

console.log(projects[0].imageUrl);

const Portfolio = () => {
    return (
        <section>
            <h1>My Projects</h1>
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
