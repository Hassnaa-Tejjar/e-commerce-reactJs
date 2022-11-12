import React, { useEffect } from 'react';

import {useParams} from "react-router-dom"
import ProduitService from "../../services/ProduitService";
import { useState } from 'react';


const Description=()=>{
  const [products,setProducts]=useState([])
  const [index,setIndex]=useState(1)
  const {productId} = useParams()

   const  handleTab = index =>{
    setIndex(index)

  };
  useEffect(()=>{
    ProduitService.getProducts().then((response)=>{
    
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
                  {thisProduct.prixPromotion===null?   <span>MAD {thisProduct.prixProd}</span> : <span>MAD {thisProduct.prixPromotion}</span>}
                 
               </div>
                 <p className='titles'>Description du produit:</p>
                 <p>{thisProduct.description}</p>
                 <p className='titles'>Catégorie:</p>
                 <p>{thisProduct.sousCategorie.nomSousCat}</p>
                 <p className='titles'>Utilisation:</p>
                <p>{thisProduct.utilisation}</p>
                 <p className='titles'>Composition:</p>
              <p>{thisProduct.composition}</p>
              <p className='titles'>Mode d'emploi:</p>
              <p>{thisProduct.modeEmploi}</p>
              <p className='titles'>Précautions d'emploi:</p>
              <p>{thisProduct.precautions}</p>
              <p className='titles'>Conditionnement:</p>
              <p>{thisProduct.conditionnement}</p>
              <div className="thumb" >
                {
               Object.values(thisProduct.imagesProd).slice(1).map((img, index) =>(
                    <img src={img} alt="" key={index} 
                    onClick={() => handleTab(index+1)}
                    />
                ))
                }
            </div>

               </div>
            </div> )}
        
      
     
    </div>
  )
}
export default Description;