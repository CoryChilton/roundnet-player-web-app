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
    <div className="border border-gray-300 shadow-glow shadow-red-500 h-96 flex flex-col items-center justify-center rounded-3xl aspect-square text-center">
      <div className="flex items-center mb-2 gap-2">
        <div className="flex flex-col items-center w-1/2">
          <h3 className="text-2xl text gray-300 text-shadow-glow shadow-pink-500 mb-2 text-center">
            {firstLetterUpper(node.player1)}
          </h3>
          <h5 className="font-thin text-gray-500 mb-2">
            on team
          </h5>
          <h4 className="text-xl text-gray-300 font-light">
            {game.team_1}
          </h4>
        </div>
        <h5 className="font-thin text-gray-500 text-center">
          played<br/>against
        </h5>
        <div className="flex flex-col items-center w-1/2">
          <h3 className="text-2xl text gray-300 text-shadow-glow shadow-purple-500 mb-2 text-center">
            {firstLetterUpper(node.player2)}
          </h3>
          <h5 className="font-thin text-gray-500 mb-2">
            on team
          </h5>
          <h4 className="text-xl text-gray-300 font-light text-center">
            {game.team_2}
          </h4>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h5 className="font-thin text-gray-500 mb-2">
          at
        </h5> 
        <h4 className="text-xl text-gray-300 font-extralight">
          {tournamentDict.get(game.tournament_name)}
        </h4> 
        <span className="font-thin text-gray-500">
          ({game.division})
        </span>
      </div>
      <h5 className="font-extralight text-gray-400">
        {game.tournament_stage}
      </h5>
    </div>
  )
}