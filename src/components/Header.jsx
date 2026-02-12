import React, { useState } from 'react'

function Header() {
    const [navOn, navOff] = useState(false)


    const menu = ['Home', 'About me', 'Experience', 'Stack']
    const menuList = menu.map((menu, i)=><li key={i}>{menu}</li>)

    const navToggle = ()=>{
        navOff(!navOn)
    }
    
  return (
    <>
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
    </>
   
  )
}

export default Header