import React from 'react'
import aboutMePic from './images/3.png'
import github from './images/Github.png'
import xSocial from './images/X.png'
import linkdin from './images/Linkedin.png'
import tiktok from './images/Tiktok.png'

function Body() {
  return (
    <>
    {/* About-me Section */}
        <div className='container about-me' id='about'>
            <div className='row'>
                <div className='profile-pic'>
                    <img src={aboutMePic} alt='about-me-pic'></img>
                </div>
                <div className='about-text'>
                    <div>
                        <h1 className='header-text'>About Me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos iste sunt soluta placeat doloribus non, consequuntur saepe natus nisi minima voluptate neque in culpa quis illo exercitationem porro delectus!</p>
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
    </>
  )
}

export default Body