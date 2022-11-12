import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "../newarrivals/style.css"
import ProduitService from "../../services/ProduitService";
import { Link } from "react-router-dom"
const Dcard = ({addToCart,searchTerm}) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  const [produit,setProduit]=useState([])
  useEffect(()=>{
    ProduitService.getProducts().then((response)=>{
    
        setProduit(response.data)
        console.log(response.data)
       
     }).catch(error=>{
        console.log(error);
     })
   
  },[]);
  return (
    <>
      <Slider {...settings}>
      {produit.filter((value)=>{
        if(searchTerm===""){
          return value;
        }else if(value.nomProd.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())||value.prixProd.includes(searchTerm)||value.prixPromotion.includes(searchTerm)){
          return value;
        }
        
        }).map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='img'>
                <Link to={`/details/${value.codeProd}`}><img src={value.imagesProd.image1} alt=''  /></Link>
                </div>
                <Link to={`/details/${value.codeProd}`}><h4>{value.nomProd}</h4></Link>
                <div className='price'>
                {value.prixPromotion==="0"?  <span>MAD {value.prixProd}</span> :<span>MAD {value.prixPromotion}</span>}
                <button onClick={() => addToCart(value)}>
                      <i className='fa fa-plus'></i>
                    </button>
                    </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
