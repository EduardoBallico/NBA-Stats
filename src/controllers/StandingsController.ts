import api from '@/src/services/ApiService';
import { GetStandingsParams } from '@/src/types/StandingsParams';

class StandingsController {
	async getStandings(params: GetStandingsParams) {
		try {
			const response = await api.get(`standings`, params);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
}

export default new StandingsController();
