import axios, { AxiosInstance } from 'axios';

class ApiService {
	private api: AxiosInstance;

	constructor() {
		this.api = axios.create({
			baseURL: 'https://v2.nba.api-sports.io/',
			timeout: 30000,
			headers: {
				'x-rapidapi-key': '6c1a261a154e0d692611d32165b01b9e',
				'x-rapidapi-host': 'v2.nba.api-sports.io'
			}
		});

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
