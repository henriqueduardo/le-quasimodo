import axios from "axios";

// instancia axios (passar configs)
const api = axios.create({
    baseURL: 'http://localhost:3021'
})

export default api;