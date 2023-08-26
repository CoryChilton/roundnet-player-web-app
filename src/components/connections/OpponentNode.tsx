import Node from "@/utilities/connection";
import { firstLetterUpper } from "@/utilities/utils";
import { tournamentDict } from "@/utilities/tournament";
import Game, {defaultGame} from "@/utilities/game";

export default function OpponentNode({node, player1ListedFirst}:{node:Node, player1ListedFirst:boolean}) {
  const game:Game = node.game && JSON.parse(node.game) || defaultGame;
  if (!player1ListedFirst){
    let temp = node.player1;
    node.player1 = node.player2;
    node.player2 = temp;

    temp = game.team_1;
    game.team_1 = game.team_2;
    game.team_2 = temp;
    console.log(game)
  }
  return (
    <div className="border border-gray-300 shadow-glow shadow-red-500 h-80 sm:h-96 flex flex-col items-center justify-around py-4 px-2 rounded-3xl aspect-square text-center">
      <h4 className="text-xl text-gray-300 font-light text-center">
        <span className="font-thin text-gray-400">Team: </span>{game.team_1}
      </h4>
      <h3 className="text-2xl text gray-300 text-shadow-glow shadow-pink-500 text-center">
        {firstLetterUpper(node.player1)}
      </h3>
      <h5 className="font-thin text-gray-500 text-center">
        played against
      </h5>
      <h3 className="text-2xl text gray-300 text-shadow-glow shadow-purple-500 text-center">
        {firstLetterUpper(node.player2)}
      </h3>
      <h4 className="text-xl text-gray-300 font-light text-center">
        <span className="font-thin text-gray-400">Team: </span>{game.team_2}
      </h4>
      <div>
        <h5 className="font-thin text-gray-500">
          at
        </h5>
        <h4 className="text-xl text-gray-300 font-extralight text-center">
          {tournamentDict.get(game.tournament_name)}
        </h4> 
        <span className="font-thin text-gray-500">
          ({game.division})
        </span>
        <h5 className="font-extralight text-gray-400">
          {game.tournament_stage}
        </h5>
      </div> 
    </div>
  )
}