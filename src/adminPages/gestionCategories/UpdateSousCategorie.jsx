import { useForm } from "react-hook-form";

import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useState } from "react"

import {useParams} from "react-router-dom"
import CategorieService from "../../services/CategorieService";
import SousCategorieService from "../../services/SousCategorieService";
function UpdateSousCategorie() {
    const [nomCat,setNomCat]=useState();
    const [nomSousCat,setNomSousCat]=useState();
    const [categories,setCategories]=useState([]);
    const {souscategoryId} = useParams()
    const form = useRef();
    const history = useHistory();
    const {register,handleSubmit,formState: { errors },trigger} = useForm({ mode:"onChange"});
    useEffect(()=>{
        SousCategorieService.getSousCategoryById(souscategoryId).then((response)=>{
            let thisSousCategory=response.data
            setNomSousCat(thisSousCategory.nomSousCat)
            setNomCat(thisSousCategory.categorie.nomCat)
              
         }).catch(error=>{
            console.log(error);
         })
        
      
      },[]);
      useEffect(()=>{
        CategorieService.getCategories().then((response)=>{
          setCategories(response.data)
          console.log(response.data)
         
       }).catch(error=>{
          console.log(error);
       })
       
  
    },[]);
    const getToken=()=>{
      return localStorage.getItem('USER_KEY');
  }
    function updatesouscategory(){
    
        const formData= new FormData();
    formData.append("codeSousCat",souscategoryId)
    formData.append("nomCat", nomCat);
    formData.append('nomSousCat', nomSousCat);
    fetch(`http://localhost:8080/updatesouscategory/${souscategoryId}`,{
    method:'PUT',
    body:formData,
    headers:{
      'Authorization':'Bearer '+getToken()
  }
}).then((response)=>{
        
          console.log(response.data)
           history.push('/gestion-categories')
           window.location.reload(false)

   
        }).catch(error=>{
           console.log(error);
           alert(error)
    
        })
    }
   
    return(
        <div class="service">
            <form class="form" ref={form} onSubmit={handleSubmit(updatesouscategory)}>
            <h2>Modifier Une sous catégorie</h2>
        <p type="Nom de sous catégorie:"><input placeholder="Sous Catégorie"  value={nomSousCat}
                   name="nomSousCat"
                   className={`form-control ${errors.nomSousCat && "invalid"}`}
                   {...register("nomSousCat", { required: "Veuillez entrer le nom de sous catégorie",
                  })}
                  onKeyUp={() => {
                   trigger("nomSousCat");
                 }}
                 onChange={(e) =>setNomSousCat(e.target.value) }
                  /></p>
                  {errors.nomSousCat && (
                    <small className="text-danger">{errors.nomSousCat.message}</small>
                  )}
        <p type="Catégorie">
        <select id="sousCategories" value={nomCat}   
                   
                   className={`form-control ${errors.nomCat && "invalid"}`}
                   {...register("nomCat", { required: "Veuillez choisir une catégorie",
                  })}
                  onKeyUp={() => {
                   trigger("nomCat");
                 }}
                 onChange={(e) => setNomCat(e.target.value)}
                   >
                   <option> </option>
                   {
                     categories.map((val,index)=>{
                        return(
                         <option key={index} >{val.nomCat}</option>
                        )
                     })
                   }
                   </select>
        </p>
         {errors.nomCat && (
                    <small className="text-danger">{errors.nomCat.message}</small>
                  )}
         <button type="submit">Modifier</button>
       
       </form>
        </div>
    )
}
export default UpdateSousCategorie;