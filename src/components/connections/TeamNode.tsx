import Node from "@/utilities/connection";
import { tournamentDict } from "@/utilities/tournament";
import { firstLetterUpper } from "@/utilities/utils";

export default function TeamNode({node, player1ListedFirst}:{node:Node, player1ListedFirst:boolean}) {
  return (
    <div className="border border-purple-400 h-96 aspect-square rounded-full shadow-glow shadow-purple-500 flex flex-col items-center justify-center">
      <h3 className="text-2xl text-gray-300">
        {tournamentDict.get(node.tournament || '')}
      </h3>
      <h4 className="text-xl text gray-300">
        {player1ListedFirst ? firstLetterUpper(node.player1) : firstLetterUpper(node.player2)}
      </h4>
      <h4 className="text-xl text gray-300">
        {player1ListedFirst ? firstLetterUpper(node.player2) : firstLetterUpper(node.player1)}
      </h4>
    </div>
  )
}