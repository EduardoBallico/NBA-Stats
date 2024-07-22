import api from '@/src/services/ApiService';
import { GetGamesParams, GetGamesStatisticsParams } from '@/src/types/GamesParams';

class GamesController {
	async getGames(params: GetGamesParams) {
		try {
			const response = await api.get(`games`, params);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}

  async getGamesStatistics(params: GetGamesStatisticsParams) {
		try {
			const response = await api.get(`games/statistics`, params);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
}

export default new GamesController();
