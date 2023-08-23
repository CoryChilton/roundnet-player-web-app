export default interface Game {
  team_1: string;
  team_2: string;
  players_1: string;
  players_2: string;
  division: string;
  score_1: number;
  score_2: number;
  tournament_name: string;
  tournament_stage: string;
}

export const defaultGame = JSON.stringify({
  team_1: '',
  team_2: '',
  players_1: '',
  players_2: '',
  division: '',
  score_1: 1,
  score_2: 1,
  tournament_name: '',
  tournament_stage: '',
})