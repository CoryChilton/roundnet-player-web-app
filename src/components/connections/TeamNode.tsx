import Node from "@/utilities/connection";
import { tournamentDict } from "@/utilities/tournament";
import { firstLetterUpper } from "@/utilities/utils";

export default function TeamNode({node, player1ListedFirst}:{node:Node, player1ListedFirst:boolean}) {
  return (
    <div className="border border-gray-300 h-80 sm:h-96 aspect-square rounded-full shadow-glow shadow-yellow-400 flex flex-col items-center justify-center gap-2">
      <h3 className="text-2xl text gray-300 text-shadow-glow shadow-pink-500 text-center px-4">
        {player1ListedFirst ? firstLetterUpper(node.player1) : firstLetterUpper(node.player2)}
      </h3>
      <h5 className="font-thin text-gray-500">
        played with
      </h5>
      <h3 className="text-2xl text gray-300 text-shadow-glow shadow-purple-500 text-center px-4">
        {player1ListedFirst ? firstLetterUpper(node.player2) : firstLetterUpper(node.player1)}
      </h3>
      <h5 className="font-thin text-gray-500">
        at
      </h5>
      <h4 className="text-xl text-gray-300 font-extralight px-10 text-center">
        {tournamentDict.get(node.tournament || '')}
      </h4>
    </div>
  )
}