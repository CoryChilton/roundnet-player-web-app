import Game from "@/utilities/game"
import { firstLetterUpper } from "@/utilities/utils"
import { tournamentDict } from "@/utilities/tournament";

export default function FeaturedGame({
  title,
  game
} : {
  title: string,
  game: Game
}) {

  if (!('team_1' in game)) {
    return null;
  }

  const players1 = JSON.parse(game.players_1);
  const players2 = JSON.parse(game.players_2);

  return (
    <div className="grid grid-cols-[1fr_0.1fr_1fr] border-gray-200 shadow-glow shadow-pink-300 w-full max-w-2xl p-2">
      <h2 className="text-2xl text-gray-200 text-shadow-glow shadow-yellow-700 col-span-3 text-center mb-1">{title}</h2>
      <h4 className="text-lg text-gray-300 font-light text-center break-words w-0 min-w-full px-2 flex flex-col justify-end">
        {game.team_1}
      </h4>
      <div className="text-lg text-gray-500 text-center flex flex-col justify-end">vs</div>
      <h4 className="text-lg text-gray-300 font-light text-center break-words w-0 min-w-full px-2 flex flex-col justify-end">
        {game.team_2}
      </h4>
      <h3 className="text-5xl text-pink-200 text-shadow-glow shadow-pink-500 font-semibold text-center">
        {game.score_1}
      </h3>
      <div className="text-gray-500 font-bold text-3xl text-center">-</div>
      <h3 className="text-5xl text-pink-200 text-shadow-glow shadow-pink-500 font-semibold text-center">
        {game.score_2}
      </h3>
      <h4 className="text-gray-300 font-extralight text-center mt-1">
        {firstLetterUpper(players1[0])} and {firstLetterUpper(players1[1])}
      </h4>
      <h4 className="text-gray-300 font-extralight text-center col-start-3 mt-1">
        {firstLetterUpper(players2[0])} and {firstLetterUpper(players2[1])}
      </h4>
      <h3 className="text-gray-300 col-span-3 text-center mt-2">
        {tournamentDict.get(game.tournament_name)} ({game.division})
      </h3>
      <h4 className="text-gray-300 font-light text-center col-span-3">
        {firstLetterUpper(game.tournament_stage)}
      </h4>
    </div>
  )
}


