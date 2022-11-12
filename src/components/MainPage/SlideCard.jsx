import React, { useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BannierePubService from "../../services/BannierePubService"
import { useState } from "react"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  const [images,setImages]=useState([]);
  useEffect(()=>{
    BannierePubService.getSlider().then((response)=>{
    
        setImages(response.data)
        console.log(response.data)
       
     }).catch(error=>{
        console.log(error);
     })
   
  },[]);
  return (
    <>
      <Slider {...settings}>
        {images.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
               
                <div className='center' style={{marginTop:-40,marginLeft:10}}>
                  <img src={value.imageUrl} alt='' style={{height:500,width:855,borderStyle: "groove"}} />
                 
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
