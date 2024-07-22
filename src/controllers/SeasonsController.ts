import api from '@/src/services/ApiService';

class SeasonsController {
	async getSeasons() {
		try {
			const response = await api.get(`seasons`);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
}

export default new SeasonsController();
