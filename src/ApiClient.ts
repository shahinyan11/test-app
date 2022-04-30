import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  
});


export default apiClient;