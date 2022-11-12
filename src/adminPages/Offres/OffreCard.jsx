import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
import "./style.css";
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
const OffreCard = ({ productItems ,searchTerm}) => {


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
  const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
  const handleDelete = (codeProd) => {
    fetch("http://localhost:8080/produit/delete/"+codeProd, {
        method: "DELETE",
        headers: {"Accept":"application/json", "Content-Type":"application/json",'Authorization':'Bearer '+getToken()}
    }).then(() => {
        let offres = [...productItems].filter(i => i.codeProd !== codeProd);
        productItems.push(offres);
        window.location.reload(false)
    });
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
                 
                  <Link to={`/description/${productItems.codeProd}`}><img src={productItems.imagesProd.image1} alt='' height={200} width={200}/></Link>
                  <Link to={`/description/${productItems.codeProd}`}> <img src={productItems.imagesProd.image2} alt='' height={200} width={200}/></Link>
                  <Link to={`/description/${productItems.codeProd}`}><img src={productItems.imagesProd.image3} alt='' height={200} width={200}/></Link>
                  </Slider>
                  <i className="fa-solid fa-xmark" id="deleteProd" onClick={()=>handleDelete(productItems.codeProd)}></i>
                </div>
                
                <div className='img'>
                  <span className='discount'>{productItems.prixProd}</span>
                </div>
                <div className='product-details'>
                 <Link to={`/details/${productItems.codeProd}`}><h3>{productItems.nomProd}</h3></Link> 
                 
                  <div className='price'>
                    <h4>MAD {productItems.prixPromotion}</h4>
                   
                    <button >
                    <Link to={`/update/${productItems.codeProd}`} className="linkStyle" ><i className='fa-solid fa-pen'></i></Link>
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

export default OffreCard;
