import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllPlayers, searchArray, firstLetterUpper } from "@/utilities/utils";
import Loading from "../general/Loading";
import { list } from "postcss";

export default function ConnectionPlayerSelect({
  selectedPlayer, 
  playerClick,
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
        {firstLetterUpper(selectedPlayer)}
      </h3>
      <input className="border border-black" placeholder="Enter Player's Name" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      {!players.length ? <div className="mt-6"><Loading /></div> : null}
      <select onChange={playerClick} className="bg-inherit border border-white">
        {searchedPlayers.map(player => 
          <option key={player} onMouseOver={() => alert('working')}>
            {firstLetterUpper(player)}
          </option>
        )}
      </select>
    </div>
  )
}