import api from '@/src/services/ApiService';
import { GetPlayersParams, GetPlayerStatisticsParams } from '@/src/types/PlayersParams';

class PlayersController {
	async getPlayers(params: GetPlayersParams) {
		try {
			const response = await api.get(`players`, params);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}

  async getPlayersStatistics(params: GetPlayerStatisticsParams) {
		try {
			const response = await api.get(`players/statistics`, params);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
}

export default new PlayersController();
