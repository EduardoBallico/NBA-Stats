import api from '@/src/services/ApiService';

class DataController {
	// Método assíncrono para obter um usuário pelo seu ID
	async getLeagues() {
		try {
			const response = await api.get(`leagues`);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
}

export default new DataController();
