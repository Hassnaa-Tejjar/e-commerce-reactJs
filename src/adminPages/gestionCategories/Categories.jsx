
import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import CategorieService from "../../services/CategorieService";
import SousCategorieService from "../../services/SousCategorieService";
import "./style.css"
const Categories = () => {
    const [categories,setCategories]=useState([]);
    const [sousCategories,setSousCategories]=useState([]);
    useEffect(()=>{
        CategorieService.getCategories().then((response)=>{
        
            setCategories(response.data)
            console.log(response.data)
           
         }).catch(error=>{
            console.log(error);
         })
       
      },[]);
      useEffect(()=>{
        SousCategorieService.getSousCategories().then((response)=>{
            setSousCategories(response.data)
            console.log(response.data)
           
         }).catch(error=>{
            console.log(error);
         })
       
      },[]);
      const getToken=()=>{
        return localStorage.getItem('USER_KEY');
    }
      const handleDelete = (codeCat) => {
        fetch("http://localhost:8080/categorie/delete/"+codeCat, {
            method: "DELETE",
            headers: {"Accept":"application/json", "Content-Type":"application/json", 'Authorization':'Bearer '+getToken()}
        }).then(() => {
            let cat = [...categories].filter(i => i.codeCat !== codeCat);
            setCategories(cat);
            window.location.reload(false)
        });
        }
        const handleDelete1 = (codeSousCat) => {
            fetch("http://localhost:8080/souscategorie/delete/"+codeSousCat, {
                method: "DELETE",
                headers: {"Accept":"application/json", "Content-Type":"application/json", 'Authorization':'Bearer '+getToken()}
            }).then(() => {
                let souscat = [...sousCategories].filter(i => i.codeSousCat !== codeSousCat);
                setSousCategories(souscat);
                window.location.reload(false)
            });
            }
return(
    <div className="container d_flex">
    <div className="categories" >
    <h2>Gestion des catégories</h2>
    <div className="ajouter">
    <Link to={"/addCategory"}><button>Ajouter</button></Link>
    </div>
   <table class="styled-table">
    <thead>
        <tr>
            <th>Nom catégorie</th>
            <th>Image catégorie</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    {categories.map((value, index) => {
        return(
            <tr>
            <td>{value.nomCat}</td>
            <td><img src={value.imageUrlCat} width="50" height="50"/></td>
            <td >
            <i class="fa-solid fa-trash-can" id="trash" onClick={()=>handleDelete(value.codeCat)}></i>
            <Link to={`/updateCategory/${value.codeCat}`}><i class="fa-solid fa-pen-to-square" id="pen"></i></Link>
            </td>
            </tr>
       
        )
    })}
       
      
    </tbody>
   </table>
    </div>
    <div className="Souscategories">
    <h2>Gestion des sous catégories</h2>
    <div className="ajouter">
   <Link to={"/addSousCategorie"}><button >Ajouter</button></Link> 
    </div>
    <table class="styled-table">
    <thead>
        <tr>
            <th>Nom sous catégorie</th>
            <th>catégorie</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    {sousCategories.map((value, index) => {
        return(
            <tr>
            <td>{value.nomSousCat}</td>
            <td>{value.categorie.nomCat}</td>
            <td >
            <i class="fa-solid fa-trash-can" id="trash" onClick={()=>handleDelete1(value.codeSousCat)}></i>
            <Link to={`/updatesouscategorie/${value.codeSousCat}`}><i class="fa-solid fa-pen-to-square" id="pen"></i></Link>
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
export default Categories;