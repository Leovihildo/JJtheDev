import React from 'react'
import aboutMePic from './images/3.png'
import github from './images/Github.png'
import xSocial from './images/X.png'
import linkdin from './images/Linkedin.png'
import tiktok from './images/Tiktok.png'

function Body() {
        const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React and Node.js",
            link: "",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/images/project1.jpg"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management with real-time updates",
            link: "",
            tech: ["React", "Firebase", "Tailwind"],
            image: "/images/project2.jpg"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather data with interactive maps",
            link: "",
            tech: ["React", "API Integration", "Charts"],
            image: "/images/project3.jpg"
        }
    ];
  return (
    <>
    {/* About-me Section */}
        <div className='container about-me' id='about'>
            <div className='row'>
                <div className='about-me-pic'>
                    <img src={aboutMePic} alt='about-me-pic'></img>
                </div>
                <div className='about-text'>
                    <div>
                        <h1 className='header-text'>About Me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos iste sunt soluta placeat doloribus non, consequuntur saepe natus nisi minima voluptate neque in culpa quis illo exercitationem porro delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet fugiat omnis quaerat? Repellat porro asperiores magni officiis quaerat! Consectetur deserunt corporis magni totam ducimus inventore amet provident quae. Voluptatibus.</p>
                    </div>
                     <div className={`socials-row`}>
                        <a href='https://github.com/Leovihildo'><img src={github} alt='github-profile' /></a>
                        <a href='https://x.com/aogejosh17'><img src={xSocial} alt='X-profile' /></a>
                        <a href='https://www.linkedin.com/in/joshua-johnson-46a06823b/'><img src={linkdin} alt='Linkedin-profile'/></a>
                        <img src={tiktok} alt='Tiktok-profile'/>
                    </div>
                </div>
            </div>
        </div>

        {/* Experience Section */}
        <div className='container projects' id='projects'>
            <div className='row'>
                <h1 className='header-text'>Projects</h1>
                {/* Project Cards */}
                 <div className='projects-stack'>
                    {projects.map((project) => (
                        <div key={project.id} className='project-card'>
                            <a href={project.link}><div className='project-img'><img src={project.image} /></div></a>
                            <div className='project-content'>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className='tech-stack'>
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className='tech-tag'>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
    </>
  )
}

export default Body