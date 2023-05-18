import api from "./api";

const addProdutoApi = (product) => 
    api.post('/produto/create', product)
    .then((response) => response)
    .catch((err) => err)

const findAllProducts = () => 
    api.get('/produto/findAll')
    .then((response) => response)
    .catch((err) => err)

export { addProdutoApi, findAllProducts };