import React, {useState} from 'react'

import profilePic from './images/1.png'

function Homepage() {
     const [navOn, navOff] = useState(false)


    const menu = ['Home', 'About me', 'Experience', 'Stack']
    const menuList = menu.map((menu, i)=><li key={i}>{menu}</li>)

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
            <div className={`container`} id='home'>
                <div className={`row`}>
                    <div className={`intro-text`}>
                        <p>Hello, my name is</p>
                        <h1 className={`header-text`}>JOSHUA JOHNSON</h1>
                        <p>Talented Web Frontend Engineer with over 5 years professional experience.</p>
                        <div className={`btn hire-btn`}><a  href='+2348114893889'>Hire me</a></div>
                    </div>
                    <div className={`profile-pic`}>
                        <img src={profilePic} alt='profile-pic'/>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Homepage