import React, { useEffect } from 'react';

import {useParams} from "react-router-dom"

import { useState } from 'react';
import Services from '../../services/Services';
import { Link } from "react-router-dom"

const DescriptionService1=()=>{
  const [products,setProducts]=useState([])
  const [index,setIndex]=useState(1)
  const {productId} = useParams()

   const  handleTab = index =>{
    setIndex(index)

  };
  useEffect(()=>{
    Services.getServices().then((response)=>{
    
        setProducts(response.data)
        
       
     }).catch(error=>{
        console.log(error);
     })
    
  },[]);

  const thisProduct = products.find(obj => {
    return obj.codeProd ===parseInt(productId);
  
  });

  return(
    <div className="apps">
   {thisProduct && (
          <div className="detailss" key={thisProduct.codeProd}>
           <div className="big-imgg">
                <img src={thisProduct.imagesProd[Object.keys(thisProduct.imagesProd)[index]]} alt=""/>
            </div>

              <div className="boxx">
                <div className="rows">
                  <h2>{thisProduct.nomProd}</h2>
               
                 
               </div>
                 <p className='titles'>Description du service:</p>
                 <p>{thisProduct.description}</p>
                 <p className='titles'>Catégorie:</p>
                 <p>{thisProduct.sousCategorie.nomSousCat}</p>
               
              <div className="thumb" >
                {
               Object.values(thisProduct.imagesProd).slice(1).map((img, index) =>(
                    <img src={img} alt="" key={index} 
                    onClick={() => handleTab(index+1)}
                    />
                ))
                }
            </div>
            <Link to={`/service`}> <button className="cart">Contactez-nous</button></Link>
               </div>
            </div> )}
        
      
     
    </div>
  )
}
export default DescriptionService1;