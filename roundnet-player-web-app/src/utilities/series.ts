export default interface Series {
  team_1: string;
  team_2: string;
  players_1: string;
  players_2: string;
  division: string;
  team_1_scores: string;
  team_2_scores: string;
  tournament_name: string;
  round: string;
}

export const defaultSeries = JSON.stringify({
  team_1: '',
  team_2: '',
  players_1: '',
  players_2: '',
  division: '',
  team_1_scores: '',
  team_2_scores: '',
  tournament_name: '',
  round: '',
})