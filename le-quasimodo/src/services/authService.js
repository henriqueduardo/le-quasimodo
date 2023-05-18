import api from "./api";

const loginUserApi = (userValues) => 
    api.post("/auth/login", userValues)
    .then((response) => response)
    .catch((err) => console.error("erro na requisição", err));

const registerUser = (AddUserValues) => 
    api.post("/usuario/create", AddUserValues)
    .then((response) => response)
    .catch((err) => console.error("erro na requisição", err));

const getUserById = (idUser) => {
    return api.get(`/usuario/findById/${idUser}`)
    .then(response => response)
    .catch((err) => err)
}

export { loginUserApi, registerUser, getUserById };