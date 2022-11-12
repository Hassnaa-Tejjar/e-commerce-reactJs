import React from "react"
import OffresCard from "./OffreCard"


const Offres = ({ productItems ,searchTerm}) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Offres Spéciales</h1>
          </div>
          <OffresCard productItems={productItems} searchTerm={searchTerm}/>
        </div>
      </section>
    </>
  )
}

export default Offres