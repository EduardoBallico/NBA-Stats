export interface GetStandingsParams {
  league: string; // 'standard', 'africa', 'orlando', 'sacramento', 'utah', 'vegas'
  season: number; // YYYY of season
  team?: number; // team ID
  conference?: string; // 'east' or 'west'
  division?: string; // 'atlantic', 'central', 'southeast', 'northwest', 'pacific', 'southwest'
}

// TODO: create enums to replace this comments