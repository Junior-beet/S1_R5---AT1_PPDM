import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.87.169.94:8080',

});

export default api;

export async function initDB() {
  try {
    await api.post('/init');
    console.log('Banco de dados inicializado com sucesso!');
  } catch (error) {
    console.error('Erro ao inicializar o banco de dados:', error);
    throw error;
  }
}