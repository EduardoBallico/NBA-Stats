export interface GetGamesParams { // at least 1 parameter is required
  id?: number; // player ID
  date?: string // YYYY-MM-DD
  live?: "all"
  league?: string // 'standard', 'africa', 'orlando', 'sacramento', 'utah', 'vegas'
  season?: number; // YYYY of season
  team?: string; // team ID
  h2h?: string; // team ID - team ID -> 1-4
}

export interface GetGamesStatisticsParams {
  id: number; // Game ID
}

// TODO: create enums to replace this comments