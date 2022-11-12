import axios from "axios";
const SOUSCATEGORY_REST_API_URL='http://localhost:8080/sousCategories';
const   SousCategorie_id_REST_API_URL='http://localhost:8080/getSousCategoryById/';

const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
class SousCategorieService{
    getSousCategories(){
        return axios.get(SOUSCATEGORY_REST_API_URL);
    }
    getSousCategoryById(id){
        return axios({
            method:'GET',
            url:SousCategorie_id_REST_API_URL+id,
            headers:{
                'Authorization':'Bearer '+getToken()
            }
        })
      
    }
  
}
export default new SousCategorieService();