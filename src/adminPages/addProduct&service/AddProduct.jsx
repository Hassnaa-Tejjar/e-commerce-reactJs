
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


import "./style.css";
import SousCategorieService from "../../services/SousCategorieService";
function AddProduct() {
  const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
    const {register,handleSubmit,formState: { errors },trigger} = useForm({ mode:"onChange"});
    const [nomSousCat,setNomSousCat]=useState();
    const [nomProd,setNomProd]=useState("");
    const [prixProd,setPrixProd]=useState("0");
    const [prixPromotion,setPrixPromotion]=useState("0");
    const [utilisation,setUtilisation]=useState("");
    const [composition,setComposition]=useState("");
    const [modeEmploi,setModeEmploi]=useState("");
    const [precautions,setPrecautions]=useState("");
    const [conditionnement,setConditionnement]=useState("");
    const [nouveau,setNouveau]=useState("True");
    const [description,setDescription]=useState("");
    const [file1,setFile1]=useState("");
    const [file2,setFile2]=useState("");
    const [file3,setFile3]=useState("");
    const [sousCategories,setSousCategories]=useState([]);
   const history=useHistory();
    useEffect(()=>{
      SousCategorieService.getSousCategories().then((response)=>{
        setSousCategories(response.data)
        console.log(response.data)
       
     }).catch(error=>{
        console.log(error);
     })
     

  },[]);

    function addproduct(){
    
        const formData= new FormData();
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
     
fetch('http://localhost:8080/addproduct',{
    method:'POST',
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
    

      return (
        <div className="  d_flex" style={{justifyContent:"center",display:"flex"}}>
        <div className="checkout">  
              <h1 className="info">Ajouter un produit ou service</h1>
              <form onSubmit={handleSubmit(addproduct)} encType="multipart/form-data" method="POST" >
                
                  <label className="labell" >Libellé du produit/service:</label>
                  <div  className="inputt">
                  <input
                
                    type="text"
                    value={nomProd}
                   name="nomProd"
                   className={`form-control ${errors.nomProd && "invalid"}`}
                   {...register("nomProd", { required: "Veuillez entrer le nom du produit",
                  })}
                  onKeyUp={() => {
                   trigger("nomProd");
                 }}
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
                   value={description}
                  name="description"
                  className={`form-control ${errors.description && "invalid"}`}
                  {...register("description", { required: "Veuillez entrer une description",
                 })}
                 onKeyUp={() => {
                  trigger("description");
                }}
                onChange={(e) =>setDescription(e.target.value) }
                  /></div>
                    {errors.description && (
                    <small className="text-danger">{errors.description.message}</small>
                  )}
                   <label className="labell">Sous catégorie:</label>
                  <div  >
                    <select id="sousCategories" value={nomSousCat}   
                   
                    className={`form-control ${errors.nomSousCat && "invalid"}`}
                    {...register("nomSousCat", { required: "Veuillez choisir une sous catégorie",
                   })}
                   onKeyUp={() => {
                    trigger("nomSousCat");
                  }}
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
                    onChange={(e) =>setUtilisation(e.target.value) }
                    type="text"
                    value={utilisation}
                    name="utilisation"
                   
                  /></div>
                 
                
                
                  <label className="labell" >Composition:</label>
                  <div  className="inputt">
                  <input
                    onChange={(e) =>setComposition(e.target.value) }
                    type="text"
                    value={composition}
                  name="composition"
               
                  /></div>
                 
               <label className="labell" >Mode d'emploi:</label>
               <div  className="inputt">
                  <input
                    onChange={(e) =>setModeEmploi(e.target.value) }
                    type="text"
                    value={modeEmploi}
                  name="modeEmploi"
                
                  /></div>
                
                 <label className="labell">Précautions:</label>
                 <div  className="inputt">
                  <input
               onChange={(e) =>setPrecautions(e.target.value) }
                    type="text"
                    value={precautions}
                  name="precautions"
                 
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
                  className={`form-control ${errors.file1 && "invalid"}`}
                  {...register("file1", { required: "Veuillez choisir un fichier",
                 })}
                 onKeyUp={() => {
                  trigger("file1");
                }}
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
                  className={`form-control ${errors.file2 && "invalid"}`}
                  {...register("file2", { required: "Veuillez choisir un fichier",
                 })}
                 onKeyUp={() => {
                  trigger("file2");
                }}
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
                  className={`form-control ${errors.file3 && "invalid"}`}
                  {...register("file3", { required: "Veuillez choisir un fichier",
                 })}
                 onKeyUp={() => {
                  trigger("file3");
                }}
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
                  /></div>
                   <label className="labell">Prix du promotion:</label>
                  <div  className="inputt">
                  <input
                  onChange={(e) =>setPrixPromotion(e.target.value) }
                    type="number"
                  name="prixPromotion"
                  id="prixPromotion"
                  
                  /></div>
                   <label className="labell">Nouveau:</label>
                   <div  >
                    <select id="sousCategories" value={nouveau}  onChange={(e) => setNouveau(e.target.value)}  >
                    
          
                     
                          <option value={"True"} >True</option>
                          <option  value={"False"}>False</option>
                    
                    </select>
                  </div>
                <div className="valider">
                <button
                  type="submit"
                  value="ajouter"  >Ajouter</button>
                </div>
              </form>
        
        </div>
       



















        </div>
      );
}
export default AddProduct;
