
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {useParams} from "react-router-dom"
import ProduitService from "../../services/ProduitService";
import SousCategorieService from "../../services/SousCategorieService";
function UpdateProduct() {
  const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
 
    const [nomSousCat,setNomSousCat]=useState();
    const [nomProd,setNomProd]=useState();
    const [prixProd,setPrixProd]=useState("0");
    const [prixPromotion,setPrixPromotion]=useState("0");
    const [utilisation,setUtilisation]=useState();
    const [composition,setComposition]=useState();
    const [modeEmploi,setModeEmploi]=useState();
    const [precautions,setPrecautions]=useState();
    const [conditionnement,setConditionnement]=useState();
    const [nouveau,setNouveau]=useState();
    const [description,setDescription]=useState();
    const [file1,setFile1]=useState("");
    const [file2,setFile2]=useState("");
    const [file3,setFile3]=useState("");
    const [sousCategories,setSousCategories]=useState([]);
    const {productId} = useParams()
    useEffect(()=>{
        ProduitService.getProductById(productId).then((response)=>{
            let thisProduct=response.data
            setNomSousCat(thisProduct.sousCategorie.nomSousCat)
            setNomProd(thisProduct.nomProd)
            setPrixProd(thisProduct.prixProd)
            setPrixPromotion(thisProduct.prixPromotion)
            setUtilisation(thisProduct.utilisation)
            setComposition(thisProduct.composition)
            setModeEmploi(thisProduct.modeEmploi)
            setPrecautions(thisProduct.precautions)
            setConditionnement(thisProduct.conditionnement)
            setNouveau(thisProduct.nouveau)
            setDescription(thisProduct.description)
          
         }).catch(error=>{
            console.log(error);
         })
       
      
      },[]);
    
    const {handleSubmit,formState: { errors }} = useForm({ mode:"onChange"});
  
   const history=useHistory();

   


    useEffect(()=>{
      SousCategorieService.getSousCategories().then((response)=>{
        setSousCategories(response.data)
        console.log(response.data)
       
     }).catch(error=>{
        console.log(error);
     })
     

  },[]);
 
    function updateProduct(){
    if(file1=="" &&file2=="" && file3==""){
      const formData= new FormData();
      formData.append("codeProd",productId)
      formData.append("nomSousCat", nomSousCat);
      formData.append("nomProd", nomProd);
      formData.append("prixProd", prixProd);
      formData.append("prixPromotion",  prixPromotion);
      formData.append("utilisation", utilisation);
      formData.append("composition", composition);
      formData.append("modeEmploi", modeEmploi);
      formData.append("precautions", precautions);
      formData.append("conditionnement", conditionnement);
      formData.append("nouveau",nouveau);
      formData.append("description", description);
      fetch(`http://localhost:8080/updateProd/${productId}`,{
    method:'PUT',
    body:formData,
    headers:{
      'Authorization':'Bearer '+getToken()
  }
  
}).then((response)=>{
        
          console.log(response.data)
           history.push('/home')
          window.location.reload(false)
       
        }).catch(error=>{
           console.log(error);
           alert(error)
    
        })

    }else if(file1!="" &&file2=="" && file3==""){
      const formData= new FormData();
      formData.append("codeProd",productId)
      formData.append("nomSousCat", nomSousCat);
      formData.append("nomProd", nomProd);
      formData.append("prixProd", prixProd);
      formData.append("prixPromotion",  prixPromotion);
      formData.append("utilisation", utilisation);
      formData.append("composition", composition);
      formData.append("modeEmploi", modeEmploi);
      formData.append("precautions", precautions);
      formData.append("conditionnement", conditionnement);
      formData.append("nouveau",nouveau);
      formData.append("description", description);
      formData.append('file1', file1[0]);
      //alert(file1[0]);
      fetch(`http://localhost:8080/updateProd1/${productId}`,{
      method:'PUT',
      body:formData,
      headers:{
        'Authorization':'Bearer '+getToken()
    }
    
  }).then((response)=>{
          
            console.log(response.data)
             history.push('/home')
            window.location.reload(false)
         
          }).catch(error=>{
             console.log(error);
             alert(error)
      
          })
        }
    else if (file1!="" &&file2!="" &&file3==""){
      const formData= new FormData();
      formData.append("codeProd",productId)
      formData.append("nomSousCat", nomSousCat);
      formData.append("nomProd", nomProd);
      formData.append("prixProd", prixProd);
      formData.append("prixPromotion",  prixPromotion);
      formData.append("utilisation", utilisation);
      formData.append("composition", composition);
      formData.append("modeEmploi", modeEmploi);
      formData.append("precautions", precautions);
      formData.append("conditionnement", conditionnement);
      formData.append("nouveau",nouveau);
      formData.append("description", description);
      formData.append('file1', file1[0]);
      formData.append('file2', file2[0]);
      
      //alert(file1[0]);
      fetch(`http://localhost:8080/updateProd2/${productId}`,{
      method:'PUT',
      body:formData,
      headers:{
        'Authorization':'Bearer '+getToken()
    }
    
  }).then((response)=>{
          
            console.log(response.data)
             history.push('/home')
            window.location.reload(false)
         
          }).catch(error=>{
             console.log(error);
             alert(error)
      
          })
        
    }
    else if(file1!="" &&file2=="" &&file3!=""){
      const formData= new FormData();
      formData.append("codeProd",productId)
      formData.append("nomSousCat", nomSousCat);
      formData.append("nomProd", nomProd);
      formData.append("prixProd", prixProd);
      formData.append("prixPromotion",  prixPromotion);
      formData.append("utilisation", utilisation);
      formData.append("composition", composition);
      formData.append("modeEmploi", modeEmploi);
      formData.append("precautions", precautions);
      formData.append("conditionnement", conditionnement);
      formData.append("nouveau",nouveau);
      formData.append("description", description);
      formData.append('file1', file1[0]);
     
      formData.append('file3', file3[0]);
      //alert(file1[0]);
      fetch(`http://localhost:8080/updateProd3/${productId}`,{
      method:'PUT',
      body:formData,
      headers:{
        'Authorization':'Bearer '+getToken()
    }
    
  }).then((response)=>{
          
            console.log(response.data)
             history.push('/home')
            window.location.reload(false)
         
          }).catch(error=>{
             console.log(error);
             alert(error)
      
          })
        
    }
    else if (file1=="" &&file2!="" &&file3!=""){
      const formData= new FormData();
      formData.append("codeProd",productId)
      formData.append("nomSousCat", nomSousCat);
      formData.append("nomProd", nomProd);
      formData.append("prixProd", prixProd);
      formData.append("prixPromotion",  prixPromotion);
      formData.append("utilisation", utilisation);
      formData.append("composition", composition);
      formData.append("modeEmploi", modeEmploi);
      formData.append("precautions", precautions);
      formData.append("conditionnement", conditionnement);
      formData.append("nouveau",nouveau);
      formData.append("description", description);
   
      formData.append('file2', file2[0]);
      formData.append('file3', file3[0]);
      //alert(file1[0]);
      fetch(`http://localhost:8080/updateProd4/${productId}`,{
      method:'PUT',
      body:formData,
      headers:{
        'Authorization':'Bearer '+getToken()
    }
    
  }).then((response)=>{
          
            console.log(response.data)
             history.push('/home')
            window.location.reload(false)
         
          }).catch(error=>{
             console.log(error);
             alert(error)
      
          })
        }
    else if(file1=="" &&file2!="" &&file3==""){
      const formData= new FormData();
      formData.append("codeProd",productId)
      formData.append("nomSousCat", nomSousCat);
      formData.append("nomProd", nomProd);
      formData.append("prixProd", prixProd);
      formData.append("prixPromotion",  prixPromotion);
      formData.append("utilisation", utilisation);
      formData.append("composition", composition);
      formData.append("modeEmploi", modeEmploi);
      formData.append("precautions", precautions);
      formData.append("conditionnement", conditionnement);
      formData.append("nouveau",nouveau);
      formData.append("description", description);
      
      formData.append('file2', file2[0]);
 
      //alert(file1[0]);
      fetch(`http://localhost:8080/updateProd5/${productId}`,{
      method:'PUT',
      body:formData,
      headers:{
        'Authorization':'Bearer '+getToken()
    }
    
  }).then((response)=>{
          
            console.log(response.data)
             history.push('/home')
            window.location.reload(false)
         
          }).catch(error=>{
             console.log(error);
             alert(error)
      
          })
        }
    else if(file1=="" &&file2=="" &&file3!=""){
      const formData= new FormData();
      formData.append("codeProd",productId)
      formData.append("nomSousCat", nomSousCat);
      formData.append("nomProd", nomProd);
      formData.append("prixProd", prixProd);
      formData.append("prixPromotion",  prixPromotion);
      formData.append("utilisation", utilisation);
      formData.append("composition", composition);
      formData.append("modeEmploi", modeEmploi);
      formData.append("precautions", precautions);
      formData.append("conditionnement", conditionnement);
      formData.append("nouveau",nouveau);
      formData.append("description", description);
   
      formData.append('file3', file3[0]);
      //alert(file1[0]);
      fetch(`http://localhost:8080/updateProd6/${productId}`,{
      method:'PUT',
      body:formData,
      headers:{
        'Authorization':'Bearer '+getToken()
    }
    
  }).then((response)=>{
          
            console.log(response.data)
             history.push('/home')
            window.location.reload(false)
         
          }).catch(error=>{
             console.log(error);
             alert(error)
      
          })
        }
    
    
    else{
    const formData= new FormData();
    formData.append("codeProd",productId)
    formData.append("nomSousCat", nomSousCat);
    formData.append("nomProd", nomProd);
    formData.append("prixProd", prixProd);
    formData.append("prixPromotion",  prixPromotion);
    formData.append("utilisation", utilisation);
    formData.append("composition", composition);
    formData.append("modeEmploi", modeEmploi);
    formData.append("precautions", precautions);
    formData.append("conditionnement", conditionnement);
    formData.append("nouveau",nouveau);
    formData.append("description", description);
    formData.append('file1', file1[0]);
    formData.append('file2', file2[0]);
    formData.append('file3', file3[0]);
    //alert(file1[0]);
    fetch(`http://localhost:8080/update/${productId}`,{
    method:'PUT',
    body:formData,
    headers:{
      'Authorization':'Bearer '+getToken()
  }
  
}).then((response)=>{
        
          console.log(response.data)
           history.push('/home')
          window.location.reload(false)
       
        }).catch(error=>{
           console.log(error);
           alert(error)
    
        })
      }
    }
    

      return (
        <div className="  d_flex" style={{justifyContent:"center",display:"flex"}}>
       
        <div className="checkout">  
              <h1 className="info">Modifier un produit ou service</h1>
              <form onSubmit={handleSubmit(updateProduct)} encType="multipart/form-data" method="PUT" >
              
                  <label className="labell" >Libellé du produit/service:</label>
                  <div  className="inputt">
                  <input
                
                    type="text"
                    value={nomProd}
                   name="nomProd"
           
                 onChange={(e) =>setNomProd(e.target.value) }
                  />
                  </div>
                  {errors.nomProd && (
                    <small className="text-danger">{errors.nomProd.message}</small>
                  )}
                  <label className="labell">Description:</label>
                   <div  className="inputt">
                  <input
                    
                    type="text"
                   
                  name="description"
                  value={description}
                
                onChange={(e) =>setDescription(e.target.value) }
                  /></div>
                    {errors.description && (
                    <small className="text-danger">{errors.description.message}</small>
                  )}
                   <label className="labell">Sous catégorie:</label>
                  <div  >
                    <select id="sousCategories" value={nomSousCat}   
                   
                
                  onChange={(e) => setNomSousCat(e.target.value)}
                    >
                    <option> </option>
                    {
                      sousCategories.map((val,index)=>{
                         return(
                          <option key={index} >{val.nomSousCat}</option>
                         )
                      })
                    }
                   
                    </select>
                  </div>
                 
                  {errors.nomSousCat && (
                    <small className="text-danger">{errors.nomSousCat.message}</small>
                  )}
                 
                  <label className="labell">Utilisation:</label>
                  <div  className="inputt">
                  <input
                   
                    type="text"
                    value={utilisation}
                    name="utilisation"
                    onChange={(e) =>setUtilisation(e.target.value) }
                  /></div>
                 
                
                
                  <label className="labell" >Composition:</label>
                  <div  className="inputt">
                  <input
                   
                    type="text"
                    value={composition}
                  name="composition"
                  onChange={(e) =>setComposition(e.target.value) }
                  /></div>
                 
               <label className="labell" >Mode d'emploi:</label>
               <div  className="inputt">
                  <input
                  
                    type="text"
                    value={modeEmploi}
                  name="modeEmploi"
                  onChange={(e) =>setModeEmploi(e.target.value) }
                  /></div>
                
                 <label className="labell">Précautions:</label>
                 <div  className="inputt">
                  <input
        
                    type="text"
                    value={precautions}
                  name="precautions"
                  onChange={(e) =>setPrecautions(e.target.value) }
                  /></div>
                 
                   <label className="labell">Conditionnement:</label>
                   <div  className="inputt">
                  <input
                     onChange={(e) =>setConditionnement(e.target.value) }
                  
                    type="text"
                    value={conditionnement}
                  name="conditionnement"
                  
                  /></div>

               <label className="labell">Image1:</label>
                   <div  className="inputt">
                  <input
                 
                    type="file"
                  
                  name="file1"
                  id="file1"
              
                onChange={(e) =>setFile1(e.target.files) }
                  /></div>
                    {errors.file1 && (
                    <small className="text-danger">{errors.file1.message}</small>
                  )}
                    <label className="labell">Image2:</label>
                   <div  className="inputt">
                  <input
                
                    type="file"
                   
                  name="file2"
                  id="file2"
               
                onChange={(e) =>setFile2(e.target.files) }
                  /></div>
                    {errors.file2 && (
                    <small className="text-danger">{errors.file2.message}</small>
                  )}
                    <label className="labell">Image3:</label>
                   <div  className="inputt">
                  <input
        
                    type="file"
                  name="file3"
                  id="file3"
           
                defaultValue={file3}
                onChange={(e) =>setFile3(e.target.files) }
                  /></div>
                    {errors.file3 && (
                    <small className="text-danger">{errors.file3.message}</small>
                  )}
                  <label className="labell">Prix du produit:</label>
                  <div  className="inputt">
                  <input
                 onChange={(e) =>setPrixProd(e.target.value) }
                    type="number"
                  name="prixProd"
                  id="prixProd"
                  value={prixProd}
                  /></div>
                   <label className="labell">Prix du promotion:</label>
                  <div  className="inputt">
                  <input
                 onChange={(e) =>setPrixPromotion(e.target.value) }
                    type="number"
                  name="prixPromotion"
                  id="prixPromotion"
                  value={prixPromotion}
                  
                  /></div>
                   <label className="labell">Nouveau:</label>
                   <div  >
                    <select id="sousCategories" value={nouveau} onChange={(e) => setNouveau(e.target.value)}  >
                    
          
                     
                          <option value={"True"} >True</option>
                          <option  value={"False"}>False</option>
                    
                    </select>
                  </div>
                  
                <div className="valider">
                <button
                  type="submit"
                  value="modifier"  >Modifier</button>
                </div>
              </form>
        
        </div>
       



















        </div>
      );
}
export default UpdateProduct;
