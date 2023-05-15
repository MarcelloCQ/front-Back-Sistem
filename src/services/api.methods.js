import axios from 'axios'

// Definicion de variables y constantes

const baseURL = 'http://localhost:4000/api/';
const workers = 'workers/';
const login = 'login';
const upload = 'upload';

const prueba = 'https://jsonplaceholder.typicode.com/users';

// Definicion de metodos

//-------------------------------------------Login------------------------------------------//
export const postLogin = (data) => {
  return axios({
    method: 'POST',
    url: `${baseURL}${login}`,
    headers: { 'Content-Type': 'application/json' },
    data: data,
    withCredentials: true
  }).then(response => {return response}).catch(error => {return error})
};

//----------------------------------Get Foto de Perfil----------------------------------------//
export const getFotoPerfil = (id) => {
  return axios.get(`${baseURL}${upload}/${id}`)
    .then(r => {
      const imageUrl = r.data.imageUrl;
      return imageUrl;
    }).catch(e => {return e})
};
//---------------------------------------Post Foto de Perfil-------------------------------------------------//
export const postFotoPerfil = (id, fileInput) => {
  
  const formData = new FormData();
  formData.append('avatar', fileInput[0]);

  return axios({
    method: 'POST',
    url: `${baseURL}${upload}/${id}`,
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData,
  }).then(r => {return r}).catch(e => {return e})
};


export const getPrueba = () => {
  return axios.get(prueba).then(r => {return r}).catch(e => {return e})
};
