'use client';
import { useState, useEffect } from "react";
import StatBlock from "@/components/player/StatBlock";
import FeaturedGame from "@/components/player/FeaturedGame";
import { defaultGame } from "@/utilities/game";
import { defaultPlayer } from "@/utilities/player";
import { firstLetterUpper } from "@/utilities/utils";

interface pageProps{
  params: {name: string}
}

export default function PlayerPage({params}: pageProps){
  const [player, setPlayer] = useState(defaultPlayer);

  useEffect(() => {
    fetchPlayerData(params.name).then(data => setPlayer(data));
  }, []);
  const greatestLoss = JSON.parse(player.greatest_point_diff_game_loss);
  const greatestWin = JSON.parse(player.greatest_point_diff_game_win);
  const longestOT = JSON.parse(player.longest_overtime_game);
  const closestSeries = JSON.parse(player.closest_series);
  
  const PERCENT_GAME_WINS = Math.round(player.games_won / (player.games_won + player.games_lost) * 100);
  const PERCENT_SERIES_WINS = Math.round(player.series_won / (player.series_won + player.series_lost) * 100);
  const PERCENT_POINT_WINS = Math.round(player.points_won / (player.points_won + player.points_lost) * 100);
  return (
    <div>
      <h1 className="text-center text-xl font-bold mb-10">{firstLetterUpper(player.player_name)}&apos;s Stats</h1>
      <div className="flex justify-around mb-10">
        <StatBlock percent={PERCENT_GAME_WINS} label="Game Wins" won={player.games_won} lost={player.games_lost} />
        <StatBlock percent={PERCENT_SERIES_WINS} label="Series Wins" won={player.series_won} lost={player.series_lost}/>
        <StatBlock percent={PERCENT_POINT_WINS} label="Point Wins" won={player.points_won} lost={player.points_lost} />
      </div>
      <div className="flex justify-around gap-8 flex-wrap">
        <FeaturedGame title="Greatest Win" game={greatestWin} />
        <FeaturedGame title="Worst Loss" game={greatestLoss} />
        <FeaturedGame title="Longest Overtime" game={longestOT} />
      </div>
    </div>
  )
}

async function fetchPlayerData(playerName:string) {
  console.log('Getting data for: ' + playerName);
  const res = await fetch(`http://localhost:80/api/players/${playerName}`);
  const playerData = await res.json();
  return playerData;
}

