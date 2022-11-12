import axios from "axios";
const BANNIEREPUBLICITAIRE_REST_API_URL='http://localhost:8080/bannierePublicitaire';
const BANNIEREPUBLICITAIRE_id_REST_API_URL='http://localhost:8080/getBannierePubById/';
const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
class BannierePubService{
    getSlider(){
        return axios.get(BANNIEREPUBLICITAIRE_REST_API_URL);
    }
    getBannierePubById(id){
        return axios({
            method:'GET',
            url:BANNIEREPUBLICITAIRE_id_REST_API_URL+id,
            headers:{
                'Authorization':'Bearer '+getToken()
            }
        })
    }
   
}
export default new BannierePubService();