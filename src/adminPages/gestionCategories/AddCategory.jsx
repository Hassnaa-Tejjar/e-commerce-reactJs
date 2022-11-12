import { useForm } from "react-hook-form";

import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useState } from "react"

function AddCategory() {
  const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
    const form = useRef();
    const history = useHistory();
    const {register,handleSubmit,formState: { errors },trigger} = useForm({ mode:"onChange"});
    const [nomCat,setNomCat]=useState();
    const [file1,setFile1]=useState("");
    function addcategory(){
    
        const formData= new FormData();
          formData.append("nomCat", nomCat);
          formData.append('file1', file1[0]);
          const config = {     
            headers: { 'content-type': 'multipart/form-data' },body:formData,method:"POST"
        }
    
    fetch('http://localhost:8080/addcategory',{
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
    return(
        <div class="service">
            <form class="form" ref={form} onSubmit={handleSubmit(addcategory)}>
            <h2>Ajouter Une Catégorie</h2>
        <p type="Nom de catégorie:"><input placeholder="Catégorie"  value={nomCat}
                   name="nomCat"
                   className={`form-control ${errors.nomCat && "invalid"}`}
                   {...register("nomCat", { required: "Veuillez entrer le nom de catégorie",
                  })}
                  onKeyUp={() => {
                   trigger("nomCat");
                 }}
                 onChange={(e) =>setNomCat(e.target.value) }
                  /></p>
                  {errors.nomCat && (
                    <small className="text-danger">{errors.nomCat.message}</small>
                  )}
        <p type="Image de catégorie"><input   type="file"
                   name="file1"
                   id="file1" className={`form-control ${errors.file1 && "invalid"}`}
                   {...register("file1", { required: "Veuillez choisir un fichier",
                  })}
                  onKeyUp={() => {
                   trigger("file1");
                 }}
                 onChange={(e) =>setFile1(e.target.files) }/></p>
         {errors.file1 && (
                    <small className="text-danger">{errors.file1.message}</small>
                  )}
         <button type="submit">Ajouter</button>
       
       </form>
        </div>
    )
}
export default AddCategory;