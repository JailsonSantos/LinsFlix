import axios from 'axios';

// Em Device externo, o localhost do funciona
const api = axios.create({
  // Sempre usar o IP atual da REDE (sempre muda)
  baseURL: 'http://192.168.1.103:8000',
  //baseURL: 'http://10.0.2.2:8000', usado em emulador
});

export default api;