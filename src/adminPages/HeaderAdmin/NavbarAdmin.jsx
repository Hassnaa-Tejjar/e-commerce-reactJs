import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
  
  const [MobileMenu, setMobileMenu] = useState(false)
  const history=useHistory();
  const logOut=()=>{

    localStorage.clear();
    history.push('/adminLogin');

}
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
                <Link to='/home'>Accueil</Link>
              </li>
              
              <li>
                <Link to='/ajouter-produit'>Ajout Produit&Service</Link>
              </li>
             
              <li>
                <Link to='/gestion-categories'>Catégories</Link>
              </li>
              <li>
                <Link to='/banniere-publicitaire'>Bannière publicitaire </Link>
              </li>
              <li onClick={()=>logOut()}>
                Déconnexion 
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
