import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex' style={{backgroundColor:'#f2fff2'}}>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
             
              <li>
                <Link to='/'>Accueil</Link>
              </li>
              <li>
                <Link to='/offresSpéciales'>Offres spéciales</Link>
              </li>
              <li>
                <Link to='/nouveauté'>Nouveauté</Link>
              </li>
             
              <li>
                <Link to='/cart'>Panier</Link>
              </li>
              <li>
                <Link to='/pages'>Pages</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
