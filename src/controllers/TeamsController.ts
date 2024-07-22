import api from '@/src/services/ApiService';
import { GetTeamParams, GetTeamStatisticsParams } from '@/src/types/TeamsParams';

class TeamsController {
	async getTeam(params: GetTeamParams) {
		try {
			const response = await api.get(`teams`, params);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}

  async getTeamStatisticsParams(params: GetTeamStatisticsParams) {
		try {
			const response = await api.get(`teams/statistics`, params);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
}

export default new TeamsController();
