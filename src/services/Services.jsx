import axios from "axios";
const Services_REST_API_URL='http://localhost:8080/services';
class Services{
    getServices(){
        return axios.get(Services_REST_API_URL);
    }
}
export default new Services();