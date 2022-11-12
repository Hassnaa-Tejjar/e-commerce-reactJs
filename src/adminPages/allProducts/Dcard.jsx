import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


import ProduitService from "../../services/ProduitService";
import { Link } from "react-router-dom"
const Dcard = ({searchTerm}) => {
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
  const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
  const handleDelete = (codeProd) => {
    fetch("http://localhost:8080/produit/delete/"+codeProd, {
        method: "DELETE",
        headers: {"Accept":"application/json", "Content-Type":"application/json",'Authorization':'Bearer '+getToken()}
    }).then(() => {
        let prod = [...produit].filter(i => i.codeProd !== codeProd);
        produit.push(prod);
        window.location.reload(false)
    });
    }
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
              <i className="fa-solid fa-xmark" id="delete" onClick={()=>handleDelete(value.codeProd)}></i>
                <div className='img'>
                <Link to={`/details/${value.codeProd}`}><img src={value.imagesProd.image1} alt=''  /></Link>
                </div>
                <Link to={`/details/${value.codeProd}`}><h4>{value.nomProd}</h4></Link>
                <div className='price'>
                {value.prixPromotion==="0"?  <span>MAD {value.prixProd}</span> :<span>MAD {value.prixPromotion}</span>}
                <button >
                <Link to={`/update/${value.codeProd}`} className="linkStyle" > <i className='fa-solid fa-pen'></i></Link>
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
