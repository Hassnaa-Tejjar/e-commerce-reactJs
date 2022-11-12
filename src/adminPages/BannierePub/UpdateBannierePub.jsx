import { useForm } from "react-hook-form";

import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useState } from "react"

import {useParams} from "react-router-dom"

import BannierePubService from "../../services/BannierePubService";
function UpdateBannierePub() {
    
    const [file1,setFile1]=useState();
    const {bannierePubId} = useParams()
    const form = useRef();
    const history = useHistory();
    const {register,handleSubmit,formState: { errors },trigger} = useForm({ mode:"onChange"});
    useEffect(()=>{
        BannierePubService.getBannierePubById(bannierePubId).then((response)=>{
            let thisBannierePub=response.data
            setFile1(thisBannierePub.imageUrl)
              
         }).catch(error=>{
            console.log(error);
         })
        
      
      },[]);
      const getToken=()=>{
        return localStorage.getItem('USER_KEY');
    }
    function updatebannierepub(){
    
        const formData= new FormData();
    formData.append("id",bannierePubId)
    formData.append('file1', file1[0]);
    fetch(`http://localhost:8080/updateBannierePub/${bannierePubId}`,{
    method:'PUT',
    body:formData,
    headers:{
        'Authorization':'Bearer '+getToken()
    }
}).then((response)=>{
        
          console.log(response.data)
           history.push('/banniere-publicitaire')
           window.location.reload(false)
   
        }).catch(error=>{
           console.log(error);
           alert(error)
    
        })
    }
   
    return(
        <div class="service">
            <form class="form" ref={form} onSubmit={handleSubmit(updatebannierepub)}>
            <h2>Modifier Une Banniere publicitaire</h2>
       
        <p type="Image"><input   type="file"
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
         <button type="submit">Modifier</button>
       
       </form>
        </div>
    )
}
export default UpdateBannierePub;