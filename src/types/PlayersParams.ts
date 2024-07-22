export interface GetPlayersParams { // at least 1 parameter is required
  id?: number; // player ID
  name?: string; // player name
  team?: string; // team ID
  season?: number; // YYYY of season
  country?: string; // country code
  search?: string; // at least 3 characters
}

export interface GetPlayerStatisticsParams { // at least 1 parameter is required
  id?: number; // player ID
  game?: number; // game ID
  team?: string; // team ID
  season?: number; // YYYY of season
}

// TODO: create enums to replace this comments