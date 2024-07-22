export interface GetTeamParams {
  id?: number; // player ID
  name?: string; // player name
  code?: string; // team code (3 letters)
  league?: string; // 'standard', 'africa', 'orlando', 'sacramento', 'utah', 'vegas'
  conference?: string; // 'east' or 'west'
  division?: string; // 'atlantic', 'central', 'southeast', 'northwest', 'pacific', 'southwest'
  search?: string; // at least 3 characters
}

export interface GetTeamStatisticsParams {
  id: number; // player ID
  season: number; // YYYY of season
  stage?: number; // stage of the games
}

// TODO: create enums to replace this comments