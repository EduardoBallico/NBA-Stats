import api from '@/src/services/ApiService';

class LeaguesController {
	async getLeagues() {
		try {
			const response = await api.get(`leagues`);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
}

export default new LeaguesController();
