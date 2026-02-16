import React, { useState, useEffect } from 'react'
import aboutMePic from './images/3.png'
import github from './images/Github.png'
import xSocial from './images/X.png'
import linkdin from './images/Linkedin.png'
import tiktok from './images/Tiktok.png'
import pixonomi from './images/PixonomiBigScreen.jpg'
import jam from './images/JAMBigScreen.jpg'
import quizly from './images/QuizlyBigScreen.jpg'
import jsLogo from './images/JSlogo.png'
import hcLogo from './images/HtmlCsslogo.png'
import pyLogo from './images/Pythonlogo.png'
import reactLogo from './images/Reactlogo.png'
import rorLogo from './images/RoRlogo.png'
import tsLogo from './images/TSlogo.png'
import wpLogo from './images/WPlogo.png'

function Body() {
    const [inputVal, setInputVal] = useState("")

    const logos = [jsLogo, hcLogo, pyLogo, reactLogo, rorLogo, tsLogo, wpLogo]

    const projects = [
        {
            id: 1,
            title: "Pixonomi LLC",
            description: "A B2B company specializing in lead conversion solutions",
            link: "https://www.pixonomi.com/",
            tech: ["Ruby on Rails", "HTML/CSS"],
            image: pixonomi,
            alt: "Pixonomi LLC_img"
        },
        {
            id: 2,
            title: "JAM",
            description: "An online marketplace to get the most trustworthy and skillfull artisans",
            link: "https://leovihildo.github.io/justanothermarketplace/",
            tech: ["React", "Github", "Tailwind"],
            image: jam,
            alt: "JAM_img"
        },
        {
            id: 3,
            title: "Quizly",
            description: "Fun and interactive quiz app to test your general knowledge",
            link: "https://leovihildo.github.io/Quizly/",
            tech: ["React", "API Integration"],
            image: quizly,
            alt: "Quizly app_img"
        }
    ];

    useEffect(() => {
         const handleScroll = () => {
            const sections = document.querySelectorAll('.container');
            
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.8;
                
                if (isVisible) {
                    section.classList.add('animate__fadeInUp');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
    {/* About-me Section */}
        <div  className={`container about-me animate__animated`} id='about'>
            <div className='row'>
                <div className='about-me-pic'>
                    <img src={aboutMePic} alt='about-me-pic' loading='lazy' decoding='async'></img>
                </div>
                <div className='about-text'>
                    <div>
                        <h1 className='header-text'>About Me</h1>
                        <p>
                            I'm Joshua Johnson, a Frontend Developer who believes great code should be invisible — users should just experience something that works. For the past 5+ years, I've been building web applications that balance technical excellence with real-world usability. I focus on creating solutions that deliver measurable results.
                            My toolkit includes React, TypeScript, JavaScript, HTML5, CSS3, and modern frameworks that help me build fast, accessible, and responsive web experiences. But beyond the tech stack, what drives me is solving problems, turning complex requirements into intuitive interfaces that people actually enjoy using.
                            I'm a Computer Science graduate from the University of Ibadan, always learning, always improving, and always looking for the next challenge that pushes my skills forward.
                        </p>
                    </div>
                     <div className={`socials-row`}>
                        <a href='https://github.com/Leovihildo'><img src={github} alt='github-profile' loading='lazy' decoding='async'/></a>
                        <a href='https://x.com/aogejosh17'><img src={xSocial} alt='X-profile' loading='lazy' decoding='async'/></a>
                        <a href='https://www.linkedin.com/in/joshua-johnson-46a06823b/'><img src={linkdin} alt='Linkedin-profile' loading='lazy' decoding='async'/></a>
                        <a href='https://vm.tiktok.com/ZS9JCokc7yNFs-QjdLk/'><img src={tiktok} alt='Tiktok-profile'/></a>
                    </div>
                </div>
            </div>
        </div>

        {/* Experience Section */}
        <div  className={`container projects animate__animated`} id='projects'>
            <div className='row'>
                <h1 className='header-text'>Projects</h1>
                {/* Project Cards */}
                 <div className='projects-stack'>
                    {projects.map((project) => (
                        <div key={project.id} className='project-card' style={{'background-image': {pixonomi}}}>
                            <div className='project-img'><a href={project.link}><img src={project.image} alt={project.alt} loading='lazy' decoding='async'/></a></div>
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
        
        {/* Stack Section */}
        <div className={`container stack animate__animated`} id='stack'>
            <div className='row'>
                    <h1 className='header-text'>Stack</h1>
                    <div className='logos'>
                        {logos.map((logo, index)=><img key={index} src={logo} alt={logo} />)}
                    </div>
            </div>

        </div>

        {/* Call to Action */}
        <div className={`container cta animate__animated`} id='cta'>
            <div className='row'>
                <h1 className='header-text'>Contact me</h1>
                <textarea placeholder='Type your message' onInput={e=> setInputVal(e.target.value)}/>
                <a href={`https://wa.me/2348096169948?text=${inputVal}`} target='_blank' rel='noreferrer'><button className='btn  hire-btn'>Send</button></a>
            </div>
        </div>

        {/* Footer Section */}
        <div className='container footer'>
          <p className='footer-note'>&copy; JJtheDev 2026. All rights reserved</p>
        </div>
    </>
  )
}

export default Body