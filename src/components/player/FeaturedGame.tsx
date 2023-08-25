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
    <div className="flex flex-col w-[40rem] items-center border-gray-200 shadow-glow shadow-pink-300 p-2">
      <h2 className="text-2xl text-gray-200 text-shadow-glow shadow-yellow-700 mb-2">{title}</h2>
      <div className="flex items-start gap-10 w-full">
        <ScoreTeamPlayers score={game.score_1} team={game.team_1} players={players1} />
        <div className="flex flex-col items-center">
          <div className="text-lg text-gray-500">vs</div>
          <div className="text-gray-500 font-bold text-3xl mt-5">-</div>
        </div>
        <ScoreTeamPlayers score={game.score_2} team={game.team_2} players={players2} />
      </div>
      <h3 className="text-gray-300 mt-3">
        {tournamentDict.get(game.tournament_name)} ({game.division})
      </h3>
      <h4 className="text-gray-300 font-light mt-1">
        {firstLetterUpper(game.tournament_stage)}
      </h4>
    </div>
  )
}

function ScoreTeamPlayers({score, team, players}:{score:number, team:string, players:string[]}) {
  return (
    <div className="flex flex-col items-center w-1/2">
      <h4 className="text-lg text-gray-300 font-light mb-4 text-center">
        {team}
      </h4>
      <h3 className="text-5xl text-pink-200 text-shadow-glow shadow-pink-500 font-semibold mb-4">
        {score}
      </h3>
      <h4 className="text-gray-300 font-extralight text-center">
        {firstLetterUpper(players[0])} and {firstLetterUpper(players[1])}
      </h4>
    </div>
  )
}

