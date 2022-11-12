import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart,searchTerm }) => {


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.filter((value)=>{
        if(searchTerm===""){
          return value;
        }else if(value.nomProd.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())||value.prixProd.includes(searchTerm)||value.prixPromotion.includes(searchTerm)){
          return value;
        }
        
        }).map((productItems) => {
          return (
            <div className='box'>
              <div className='product mtop'>
               
                <div>
                  <Slider {...settings1}>
                  <Link to={`/details/${productItems.codeProd}`}><img src={productItems.imagesProd.image1} alt='' height={200} width={200}/></Link>
                  <Link to={`/details/${productItems.codeProd}`}> <img src={productItems.imagesProd.image2} alt='' height={200} width={200}/></Link>
                  <Link to={`/details/${productItems.codeProd}`}><img src={productItems.imagesProd.image3} alt='' height={200} width={200}/></Link>
                  </Slider>
                </div>
                <div className='img'>
                  <span className='discount'>{productItems.prixProd}</span>
                </div>
                <div className='product-details'>
                 <Link to={`/details/${productItems.codeProd}`}><h3>{productItems.nomProd}</h3></Link> 
                 
                  <div className='price'>
                    <h4>MAD {productItems.prixPromotion}</h4>
                    
                    <button onClick={() => addToCart(productItems)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
