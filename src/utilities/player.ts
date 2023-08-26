import Game, { defaultGame } from "./game";
import Series, { defaultSeries } from "./series";

export default interface Player {
  player_name: string;
  games_lost: number;
  games_won: number;
  series_won: number;
  series_lost: number;
  points_won: number;
  points_lost: number;
  greatest_point_diff_game_loss: string;
  greatest_point_diff_game_win: string;
  longest_overtime_game: string;
  closest_series: string;
  past_tournaments: string;
}

export const defaultPlayer = {
  player_name: '',
  games_lost: 1,
  games_won: 1,
  series_won: 1,
  series_lost: 1,
  points_won: 1,
  points_lost: 1,
  greatest_point_diff_game_loss: defaultGame,
  greatest_point_diff_game_win: defaultGame,
  longest_overtime_game: defaultGame,
  closest_series: defaultSeries,
  past_tournaments: '{}',
}