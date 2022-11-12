import axios from "axios";
const Offres_REST_API_URL='http://localhost:8080/offres';
class OffresService{
    getOffres(){
        return axios.get(Offres_REST_API_URL);
    }
}
export default new OffresService();