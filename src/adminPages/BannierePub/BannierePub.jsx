
import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import BannierePubService from "../../services/BannierePubService";

import "./style.css"
const BannierePub = () => {
    const [bannierePub,setBannierePub]=useState([]);

    useEffect(()=>{
        BannierePubService.getSlider().then((response)=>{
        
            setBannierePub(response.data)
            console.log(response.data)
           
         }).catch(error=>{
            console.log(error);
         })
       
      },[]);
      const getToken=()=>{
        return localStorage.getItem('USER_KEY');
    }
      const handleDelete = (id) => {
        fetch("http://localhost:8080/bannierepub/delete/"+id, {
            method: "DELETE",
            headers: {"Accept":"application/json", "Content-Type":"application/json",'Authorization':'Bearer '+getToken()}
        }).then(() => {
            let bannierepub = [...bannierePub].filter(i => i.id !== id);
            setBannierePub(bannierepub);
            window.location.reload(false)
        });
        }
   
return(
    <div style={{justifyContent:"center",display:"flex"}}>
    <div className="banniere" >
    <h2>Gestion des Bannières publicitaires</h2>
    <div className="add">
    <Link to={"/addBannierePub"}><button>Ajouter</button></Link>
    </div>
   <table class="styled-table">
    <thead>
        <tr>
           
            <th>Bannière publicitaire</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    {bannierePub.map((value, index) => {
        return(
            <tr>
            <td><img src={value.imageUrl} width="100" height="90"/></td>
            <td >
            <i class="fa-solid fa-trash-can" id="trash" onClick={()=>handleDelete(value.id)} ></i>
            <Link to={`/updateBannierePub/${value.id}`}><i class="fa-solid fa-pen-to-square" id="pen"></i></Link>
            </td>
            </tr>
       
        )
    })}
       
      
    </tbody>
   </table>
    </div>
 
    </div>
)

}
export default BannierePub;