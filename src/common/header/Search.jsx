import React from "react"
import logo from "../../components/assets/images/logo.jpg"
import { Link } from "react-router-dom"

const Search = ({ CartItem ,onChange}) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })


  return (
    <>
      <section className='search'style={{ height: 120 }}>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' style={{ width: 100, height: 100 }}/>
          </div>
         
          <div className='search-box f_flex'>
            <i className='fa fa-search' ></i>
          <input type='text' placeholder='Rechercher et appuyer sur entrer...' onChange={onChange}/>
            <span>Categories</span>
          </div>

          <div className='icon f_flex width'>
          <Link to='/adminLogin'> <i className='fa fa-user icon-circle' ></i></Link>
          
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle' ></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
