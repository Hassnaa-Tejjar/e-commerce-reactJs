import React from "react"
import Dcard from "./Dcard"

const Discount = ({addToCart,searchTerm}) => {
  
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='./images/cleaning.png' />
              <h2>Tous les produits</h2>
            </div>
     
          </div>
          <Dcard addToCart={addToCart} searchTerm={searchTerm}/>
        </div>
      </section>
    </>
  )
}

export default Discount
