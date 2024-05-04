// externalApi.ts
import fetch from 'isomorphic-fetch';
import MarvelResponse from './Interfaces/marvelResponse.interface';

class ExternalApiService {
  public static async getMarvelData(url: string): Promise<any[]> {
    try {
      const response = await fetch(url);
      const responseData = await response.json();

      if (ExternalApiService.isMarvelResponse(responseData)) {
        const data: MarvelResponse = responseData;
        return data.data.results;
      } else {
        throw new Error('Resposta da Marvel API com estrutura inválida');
      }
    } catch (error) {
      console.error('Erro ao buscar dados da Marvel API:', error);
      throw error;
    }
  }

  private static isMarvelResponse(data: any): data is MarvelResponse {
    return (
      'code' in data &&
      'status' in data &&
      'data' in data &&
      'offset' in data.data &&
      'limit' in data.data &&
      'total' in data.data &&
      'count' in data.data &&
      'results' in data.data
    );
  }
}

export default ExternalApiService;
