import React, { useEffect, useState } from "react"
import "./style.css";
import NouveauteService from "../../services/NouveauteService";
import { Link } from "react-router-dom"
const Cart = ({searchTerm}) => {
  const [newPoducts,setNewProducts]=useState([])
  useEffect(()=>{
    NouveauteService.getNewProducts().then((response)=>{
      
          setNewProducts(response.data)
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
          let newprod = [...newPoducts].filter(i => i.codeProd !== codeProd);
          newPoducts.push(newprod);
          window.location.reload(false)
      });
      }
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
               <i className="fa-solid fa-xmark" id="delete" onClick={()=>handleDelete(val.codeProd)}></i>
              <div className='img'>
             
              <Link to={`/details/${val.codeProd}`}> <img src={val.imagesProd.image1} alt='' /></Link>
              
              </div>
              <Link to={`/details/${val.codeProd}`}><h4>{val.nomProd}</h4></Link>
              
              <div className='price'>
                
              {val.prixPromotion==="0"?  <span>MAD {val.prixProd}</span> :<span>MAD {val.prixPromotion}</span>}
             
              <button >
              <Link to={`/update/${val.codeProd}`} className="linkStyle" > <i className='fa-solid fa-pen'></i></Link>
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
