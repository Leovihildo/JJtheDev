import React, {useEffect, useState} from 'react'

import profilePic from './images/1.png'
import arrow from './images/arrow_up.png'

function Homepage() {
     const [navOn, navOff] = useState(false)


    const menu = [
        {
            page: "Home",
            link: "#home"
        },
        {
            page: "About me",
            link: "#about"
        },
        {
            page: "Projects",
            link: "#projects"
        },
        {
            page: "Stack",
            link: "#stack"
        }
    ]

    const navToggle = ()=>{
        navOff(!navOn)
    }

    const closeMenu = () => {
        navOff(false)
    }

    useEffect(() => {
        if (navOn) {
            document.documentElement.style.overflow = 'hidden'
            document.body.style.overflow = 'hidden'
            document.body.style.position = 'fixed'
            document.body.style.width = '100%'
        } else {
            document.documentElement.style.overflow = 'unset'
            document.body.style.overflow = 'unset'
            document.body.style.position = 'static'
            document.body.style.width = 'auto'
        }
        
        return () => {
            document.documentElement.style.overflow = 'unset'
            document.body.style.overflow = 'unset'
            document.body.style.position = 'static'
            document.body.style.width = 'auto'
        }
    }, [navOn])

    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
                const scrollPosition = window.scrollY;
                
                // Show arrow when scrolled past home section
                if (scrollPosition > homeBottom) {
                    setShowArrow(true);
                } else {
                    setShowArrow(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuList = menu.map((menu)=><li key={menu.page} onClick={closeMenu}><a href={menu.link}>{menu.page}</a></li>)

  return (
    <>
        <div className='home'>
            {/* NAVBAR */}
            <div className={`menu-screen ${navOn ? 'active' : ''}`}>
                <ul>
                    {menuList}
                </ul>
            </div>

            <nav className={`${navOn ? 'active': ''}`}>
                <div className={`hamburger-menu ${navOn ? 'active' : ''}`} onClick={navToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            {/* HOME */}
            <div className={`container animate__animated`} id='home'>
                <div className={`row`}>
                    <div className={`intro-text`}>
                        <p>Hello, my name is</p>
                        <h1 className={`header-text`}>JOSHUA JOHNSON</h1>
                        <p>Talented Frontend Engineer with over 5 years professional experience.</p>
                        <a href='#cta' className={`btn hire-btn`}>Hire me</a>
                    </div>
                    <div className={`profile-pic`}>
                        <img src={profilePic} alt='profile-pic' loading='lazy' decoding='async'/>
                    </div>
                    
                </div>
            </div>
                <div className={`arrow-up ${showArrow ? 'visible' : ''}`}>
                    <a href='#home'><img src={arrow} alt='arrow-up'/></a>
                </div>
        </div>
    </>
  )
}

export default Homepage