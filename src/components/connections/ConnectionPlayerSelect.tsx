import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllPlayers, searchArray, firstLetterUpper } from "@/utilities/utils";
import Loading from "../general/Loading";
import { list } from "postcss";

export default function ConnectionPlayerSelect({
  selectedPlayer, 
  playerClick,
  listId,
  label
} : {
  selectedPlayer: string,
  playerClick: (e:any) => void,
  listId: string,
  label: string
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
    <div className="flex flex-col items-center relative w-full">
      <h3 className="text-lg font-extralight text-gray-300 mb-2">{label}</h3>
      <div>
        <input value={selectedPlayer} onChange={playerClick} list={listId} placeholder="Select a player" className="w-full focus:bg-gray-900 bg-inherit text-3xl border border-gray-500 drop-shadow-glow ease-in-out duration-500 rounded-full px-4 py-2 text-shadow-glow shadow-purple-600 text-gray-300 font-semibold placeholder:text-gray-500 placeholder:font-thin placeholder:text-shadow-none focus:outline-none" />
        <datalist id={listId} >
          {searchedPlayers.map(player => 
            <option key={player} value={firstLetterUpper(player)} />  
          )}
        </datalist>
      </div>
    </div>
  )
}