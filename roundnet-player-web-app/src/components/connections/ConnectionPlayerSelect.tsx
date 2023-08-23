import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllPlayers, searchArray } from "@/utilities/utils";

export default function ConnectionPlayerSelect({
  selectedPlayer, 
  playerClick
} : {
  selectedPlayer: string,
  playerClick: (e:any) => void,
}) {
  // state to control player search value
  const [searchInput, setSearchInput] = useState('');
  const [players, setPlayers]:[string[], any] = useState([]);

  useEffect(() => {
    getAllPlayers().then(players => setPlayers(players));
  }, []);

  //Making an array of the players that should show up on this search
  const searchedPlayers:string[] = searchArray(players, searchInput);
  searchedPlayers.sort();

  return (
    <div className="flex flex-col items-center">
      <h3>
        Selected Player: {selectedPlayer}
      </h3>
      <input className="border border-black" placeholder="Enter Player's Name" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      {searchedPlayers.map(player => 
        <button onClick={playerClick} key={player} className="text-gray-700 hover:text-black hover:scale-105 duration-100 ease-out cursor-pointer">
          {player}
        </button>
      )}
    </div>
  )
}