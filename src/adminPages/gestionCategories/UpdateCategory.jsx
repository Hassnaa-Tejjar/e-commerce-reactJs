import { useForm } from "react-hook-form";

import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useState } from "react"

import {useParams} from "react-router-dom"
import CategorieService from "../../services/CategorieService";
function UpdateCategory() {
  const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
    const [nomCat,setNomCat]=useState();
    const [file1,setFile1]=useState("");
    const {categoryId} = useParams()
    const form = useRef();
    const history = useHistory();
    const {handleSubmit,formState: { errors }} = useForm({ mode:"onChange"});
    useEffect(()=>{
        CategorieService.getCategoryById(categoryId).then((response)=>{
            let thisCategory=response.data
            setNomCat(thisCategory.nomCat)
            
              
         }).catch(error=>{
            console.log(error);
         })
        
      
      },[]);
    function updatecategory(){
    

        if(file1==""){
          const formData= new FormData();
          formData.append("codeCat",categoryId)
          formData.append("nomCat", nomCat);
          fetch(`http://localhost:8080/updateCatg/${categoryId}`,{
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
              
        }else{
                 const formData= new FormData();
    formData.append("codeCat",categoryId)
    formData.append("nomCat", nomCat);
    formData.append('file1', file1[0]);
    fetch(`http://localhost:8080/updateCategory/${categoryId}`,{
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
    }
   
    return(
        <div class="service">
            <form class="form" ref={form} onSubmit={handleSubmit(updatecategory)}>
            <h2>Modifier Une Catégorie</h2>
        <p type="Nom de catégorie:"><input placeholder="Catégorie"  value={nomCat}
                   name="nomCat"
              
                 onChange={(e) =>setNomCat(e.target.value) }
                  /></p>
                  {errors.nomCat && (
                    <small className="text-danger">{errors.nomCat.message}</small>
                  )}
        <p type="Image de catégorie"><input   type="file"
                   name="file1"
                   id="file1" 
                
               
                 onChange={(e) =>setFile1(e.target.files) }/></p>
         {errors.file1 && (
                    <small className="text-danger">{errors.file1.message}</small>
                  )}

         <button type="submit">Modifier</button>
       
       </form>
        </div>
    )
}
export default UpdateCategory;