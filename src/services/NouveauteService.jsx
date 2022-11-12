import axios from "axios";
const Nouveau_REST_API_URL='http://localhost:8080/nouveaute';

class NouveauteService{
    getNewProducts(){
        return axios.get(Nouveau_REST_API_URL);
    }
}
export default new NouveauteService();