import fetch from 'node-fetch';

class ExternalApiService {
  public static async getMarvelData(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      //return data.data.results; // Estou assumindo que a estrutura de resposta da Marvel API é similar a isso
    } catch (error) {
      console.error('Erro ao buscar dados da Marvel API:', error);
      throw error;
    }
  }
}

export default ExternalApiService;
