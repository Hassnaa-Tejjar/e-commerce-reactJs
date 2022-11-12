import React from "react"
import logo from "../../components/assets/images/logo.jpg"


const SearchProduct = ({onChange}) => {
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
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Rechercher et appuyer sur entrer...' onChange={onChange} />
            <span>Categories</span>
          </div>

       
        </div>
      </section>
    </>
  )
}

export default SearchProduct
