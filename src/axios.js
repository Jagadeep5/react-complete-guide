import axios from 'axios';


const CustomAxios = axios.create({
    baseURL: "http://localhost/ApiDataApp/"
});


CustomAxios.defaults.headers.common["Auth"] = "abc";

export default CustomAxios;