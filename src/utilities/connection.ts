export default interface Node {
  node1: number;
  node2: number;
  player1: string;
  player2: string;
  game?: string; // opponent nodes have this
  tournament?: string; // teammate nodes have this
}

export const defaultNode:Node = {
  node1: 1,
  node2: 1,
  player1: '',
  player2: ''
}