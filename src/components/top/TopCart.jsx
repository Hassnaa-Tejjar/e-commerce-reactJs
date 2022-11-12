import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
import Services from "../../services/Services"

const TopCart = ({searchTerm}) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }

const [services,setServices]=useState([]);
  useEffect(()=>{
    Services.getServices().then((response)=>{
    
        setServices(response.data)
        console.log(response.data)
       
     }).catch(error=>{
        console.log(error);
     })
   
  },[]);
  return (
    <>
      <Slider {...settings}>
      {services.filter((value)=>{
        if(searchTerm===""){
          return value;
        }else if(value.nomProd.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())||value.prixProd.includes(searchTerm)||value.prixPromotion.includes(searchTerm)){
          return value;
        }}).map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='nametop d_flex'>
                  <span className='tleft'>{value.nomProd}</span>
             
                </div>
                <div className='img'>
                <Link to={`/detailsService/${value.codeProd}`}> <img src={value.imagesProd.image1} alt=''  style={{height:150,width:350}}/></Link>
                </div>
               <Link to={'/service'}><h6>Contactez-nous</h6></Link> 
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
