import React, { useEffect, useState } from "react"

import NouveauteService from "../../services/NouveauteService";
import { Link } from "react-router-dom"
const Cart = ({addToCart,searchTerm}) => {
  const [newPoducts,setNewProducts]=useState([])
  useEffect(()=>{
    NouveauteService.getNewProducts().then((response)=>{
      
          setNewProducts(response.data)
          console.log(response.data)
         
       }).catch(error=>{
          console.log(error);
       })
     
    },[]);
 
  return (
    <>
      <div className='content grid product'>
      {newPoducts.filter((value)=>{
        if(searchTerm===""){
          return value;
        }else if(value.nomProd.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())||value.prixProd.includes(searchTerm)||value.prixPromotion.includes(searchTerm)){
          return value;
        }
        
        }).map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
              <Link to={`/details/${val.codeProd}`}> <img src={val.imagesProd.image1} alt='' /></Link>
              </div>
              <Link to={`/details/${val.codeProd}`}><h4>{val.nomProd}</h4></Link>
              <div className='price'>
              {val.prixPromotion==="0"?  <span>MAD {val.prixProd}</span> :<span>MAD {val.prixPromotion}</span>}
              <button onClick={() => addToCart(val)}>
                      <i className='fa fa-plus'></i>
                    </button>
              </div>
             
            </div>
          )
        })}
        
      </div>
    </>
  )
}

export default Cart
