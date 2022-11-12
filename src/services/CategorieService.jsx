import axios from "axios";
const CATEGORY_REST_API_URL='http://localhost:8080/categories';
const   Categorie_id_REST_API_URL='http://localhost:8080/getCategoryById/';

const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
class CategorieService{
    
    getCategories(){
        return axios({
            method:'GET',
            url:CATEGORY_REST_API_URL,
           
        })
    
       
    }
    getCategoryById(id){
        return axios({
            method:'GET',
            url:Categorie_id_REST_API_URL+id,
            headers:{
                'Authorization':'Bearer '+getToken()
            }
        })
        
    }
  
}
export default new CategorieService();