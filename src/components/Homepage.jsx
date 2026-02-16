import React, {useState} from 'react'

import profilePic from './images/1.png'

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
    const menuList = menu.map((menu)=><li key={menu.page}><a href={menu.link}>{menu.page}</a></li>)

    const navToggle = ()=>{
        navOff(!navOn)
    }

  return (
    <>
        <div className='home'>
            {/* NAVBAR */}
            <div className={`menu-screen ${navOn ? 'active' : ''}`}>
                <ul>
                    {menuList}
                </ul>
            </div>

            <nav>
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
                        <div className={`btn hire-btn`}><a href='#cta'>Hire me</a></div>
                    </div>
                    <div className={`profile-pic`}>
                        <img src={profilePic} alt='profile-pic' loading='lazy' decoding='async'/>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Homepage