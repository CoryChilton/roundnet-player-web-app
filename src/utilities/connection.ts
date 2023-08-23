import Game from "./game";

export default interface Node {
  node1: number;
  node2: number;
  player1: string;
  player2: string;
  game?: Game;
  tournament?: string;
}