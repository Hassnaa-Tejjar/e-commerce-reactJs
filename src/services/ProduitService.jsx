import axios from "axios";
const Product_REST_API_URL='http://localhost:8080/products';
const Product_id_REST_API_URL='http://localhost:8080/getProductById/';

const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
class ProduitService{
    getProducts(){
        return axios.get(Product_REST_API_URL);
    }
    getProductById(id){
        return axios({
            method:'GET',
            url:Product_id_REST_API_URL+id,
            headers:{
                'Authorization':'Bearer '+getToken()
            }
        })
       
    }
    
}
export default new ProduitService();