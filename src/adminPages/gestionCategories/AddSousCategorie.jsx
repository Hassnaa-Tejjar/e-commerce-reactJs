import { useForm } from "react-hook-form";

import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useState } from "react"

import CategorieService from "../../services/CategorieService";
function AddSousCategorie() {
  const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
    const form = useRef();
    const history = useHistory();
    const {register,handleSubmit,formState: { errors },trigger} = useForm({ mode:"onChange"});
    const [nomSousCat,setNomSousCat]=useState();
    const [nomCat,setNomCat]=useState("");
    const [categories,setCategories]=useState([]);
    function addsouscategory(){
    
        const formData= new FormData();
          formData.append("nomCat", nomCat);
          formData.append('nomSousCat', nomSousCat);
          
    
    fetch('http://localhost:8080/addsouscategory',{
        method:'POST',
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
    useEffect(()=>{
        CategorieService.getCategories().then((response)=>{
          setCategories(response.data)
          console.log(response.data)
         
       }).catch(error=>{
          console.log(error);
       })
       
  
    },[]);
    return(
        <div class="service">
            <form class="form" ref={form} onSubmit={handleSubmit(addsouscategory)}>
            <h2>Ajouter Une sous Catégorie</h2>
        <p type="Nom de sous catégorie:"><input placeholder="Sous catégorie" name="nomSousCat" className={`form-control ${errors.nomSousCat && "invalid"}`}
                  {...register("nomSousCat", { required: "Veuillez entrer le nom de sous catégorie",
                 })}
                 onKeyUp={() => {
                  trigger("nomSousCat");
                }}  onChange={(e) => setNomSousCat(e.target.value)}  /></p>
                 {errors.nomSousCat && (<p className="text-danger">{errors.nomSousCat.message}</p>)}
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
                    {errors.nomCat && (<p className="text-danger">{errors.nomCat.message}</p>)}
            </p>
       
         <button type="submit">Ajouter</button>
       
       </form>
        </div>
    )
}
export default AddSousCategorie;