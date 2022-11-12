import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const FlashDeals = ({ productItems, addToCart,searchTerm }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Offres Spéciales</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} searchTerm={searchTerm} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
