import React from "react"
import { useEffect } from "react";
import { useState } from "react"

import CategorieService from "../../services/CategorieService";
import SousCategorieService from "../../services/SousCategorieService";

const Categories = () => {

  const [categories,setCategories]=useState([]);
  const [sousCategories,setSousCategories]=useState([]);
  useEffect(()=>{
    CategorieService.getCategories().then((response)=>{
    
        setCategories(response.data)
        console.log(response.data)
       
     }).catch(error=>{
        console.log(error);
     })
   
  },[]);
  useEffect(()=>{
    SousCategorieService.getSousCategories().then((response)=>{
        setSousCategories(response.data)
        console.log(response.data)
       
     }).catch(error=>{
        console.log(error);
     })
   
  },[]);

  return (
    <>
      <div className='category'>
        {categories.map((value, index) => {
          return (
            <div>
            <div className='box f_flex' key={index} >
             <img alt="" src={value.imageUrlCat}  /> 
              <span>{value.nomCat}</span>
           </div>
              <div>
             {sousCategories.filter((val)=>{
               return val.categorie.codeCat===value.codeCat
             }).map((v,index)=>{
               return(
                 <div key={index}>
                   <div className='sousCat '>{v.nomSousCat}</div>
                 </div>
               )
             })}
              </div>
             
                
             
          
           </div>
          )
          
        })}
    
      </div>
      
    </>
  )
}

export default Categories
