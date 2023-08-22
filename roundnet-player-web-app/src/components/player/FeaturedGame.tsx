import Game from "@/utilities/game"

export default function FeaturedGame({
  title,
  game
} : {
  title: string,
  game: Game
}) {
  return (
    <div className="flex flex-col items-center w-96 grow shrink-0">
      <div className="font-semibold">
        {title}
      </div>
      <div>{game.team_1} {game.players_1} {game.score_1}</div>
      <div>{game.team_2} {game.players_2} {game.score_2}</div>
      <div>{game.tournament_name}</div>
      <div>{game.tournament_stage} {game.division}</div>
    </div>
  )
}

