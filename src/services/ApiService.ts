import axios, { AxiosInstance } from 'axios';

class ApiService {
	private api: AxiosInstance;

	constructor() {
		this.api = axios.create({
			baseURL: 'https://v2.nba.api-sports.io/',
			timeout: 30000,
		});

    var config = {
      headers: {
        'x-rapidapi-key': '32f61467af0fd28e9b254f479c09a060',
        'x-rapidapi-host': 'v2.nba.api-sports.io'
      }
    };

		this.api.interceptors.response.use(
			(response) => response,
			(error) => {
				console.error('Código Erro:', error);
				console.error('Erro na requisição:', error.response?.data);
				return Promise.reject(error);
			}
		);
	}

	public get(url: string, params?: object) {
		return this.api.get(url, { params });
	}

	public post(url: string, data?: object) {
		return this.api.post(url, data);
	}

	public put(url: string, data?: object) {
		return this.api.put(url, data);
	}

	public delete(url: string) {
		return this.api.delete(url);
	}
}

export default new ApiService();
