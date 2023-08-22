'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react"
// import { players, playerInterface, isAPlayer } from '../../../../data/players';

interface pageProps{
  params: {name: string}
}

export default function PlayerPage({params}: pageProps){
  const [player, setPlayer] = useState(
    {
      player_name: '',
      games_lost: 1,
      games_won: 1,
      series_won: 1,
      series_lost: 1,
      points_won: 1,
      points_lost: 1,
      greatest_point_diff_game_loss: null,
      greatest_point_diff_game_win: null,
      closest_series: null,
      longest_overtime_game: null,
      past_tournaments: null,
    }
  );

  useEffect(() => {
    fetchPlayerData(params.name).then(data => setPlayer(data));
  }, []);
  console.log(player)
  // const player = players.get(params.name);
  // if(!isAPlayer(player)) {
  //   return <div>PLAYER NOT FOUND!</div>;
  // }
  const PERCENT_GAME_WINS = Math.round(player.games_won / (player.games_won + player.games_lost) * 100);
  const PERCENT_SERIES_WINS = Math.round(player.series_won / (player.series_won + player.series_lost) * 100);
  const PERCENT_POINT_WINS = Math.round(player.points_won / (player.points_won + player.points_lost) * 100);
  return (
    <div>
      <h1 className="text-center text-xl font-bold mb-10">{firstLetterUpper(player.player_name)}&apos;s Stats</h1>
      <div className="flex justify-around">
        <StatMeter percent={PERCENT_GAME_WINS} label="Game Wins" />
        <StatMeter percent={PERCENT_SERIES_WINS} label="Series Wins" />
        <StatMeter percent={PERCENT_POINT_WINS} label="Point Wins" />
      </div>
    </div>
  )
}

function StatMeter({percent, label}:{percent: number, label: string}){
  return <div>{label}: {percent}%</div>
}

function firstLetterUpper(s:string) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i-1] === ' ') {
      result += s[i].toUpperCase();
    } else {
      result += s[i].toLowerCase();
    }
  }
  return result;
}

async function fetchPlayerData(playerName:string) {
  console.log('Getting data for: ' + playerName);
  const res = await fetch(`http://localhost:80/api/players/${playerName}`);
  const playerData = await res.json();
  return playerData;
}

