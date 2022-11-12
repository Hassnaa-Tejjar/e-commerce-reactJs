import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
import Services from "../../services/Services"
import "./style.css";

const TopCard = ({searchTerm}) => {
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
  const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
  const handleDelete = (codeProd) => {
    fetch("http://localhost:8080/produit/delete/"+codeProd, {
        method: "DELETE",
        headers: {"Accept":"application/json", "Content-Type":"application/json",'Authorization':'Bearer '+getToken()}
    }).then(() => {
        let srv = [...services].filter(i => i.codeProd !== codeProd);
        services.push(srv);
        window.location.reload(false)
    });
    }
  return (
    <>
      <Slider {...settings}>
      {services.filter((value)=>{
        if(searchTerm===""){
          return value;
        }else if(value.nomProd.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())||value.prixProd.includes(searchTerm)||value.prixPromotion.includes(searchTerm)){
          return value;
        }
        
        }).map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
              <i className="fa-solid fa-xmark" id="deleteProd" onClick={()=>handleDelete(value.codeProd)}></i>
                <div className='nametop d_flex'>
               
                  <span className='tleft'>{value.nomProd}</span>
                  {/* <span className='tright' >{value.description}</span> */}
                </div>
                <div className='img'>
                
                <Link to={`/DescriptionService/${value.codeProd}`}><img src={value.imagesProd.image1} alt=''  style={{height:150,width:350}}/></Link>
                  
                  <div className='edit'>
                  <button  >
                     
                    <Link to={`/update/${value.codeProd}`} className="linkStyle" ><i class="fa-sharp fa-solid fa-pen-to-square"></i></Link>
               
                </button>
                </div>
                </div>
                
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCard
