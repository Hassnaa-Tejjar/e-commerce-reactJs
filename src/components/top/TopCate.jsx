import React from "react"
import "./style.css"
import TopCart from "./TopCart"

const TopCate = ({searchTerm}) => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
             
              <img src="./images/service.png" style={{height:35,width:35}}/>
              
              <h2>Top Services</h2>
            </div>
         
          </div>
          <TopCart searchTerm={searchTerm} />
        </div>
      </section>
    </>
  )
}

export default TopCate
