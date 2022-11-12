import React from "react"
import Cart from "./Cart"


const NewArrivals = ({searchTerm}) => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
              <h2>Nouveauté </h2>
            </div>
           
          </div>

          <Cart  searchTerm={searchTerm}/>
        </div>
      </section>
    </>
  )
}

export default NewArrivals
