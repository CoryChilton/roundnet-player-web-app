import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllPlayers, searchArray, firstLetterUpper } from "@/utilities/utils";
import Loading from "../general/Loading";
import { list } from "postcss";

export default function ConnectionPlayerSelect({
  selectedPlayer, 
  playerClick,
  listId,
} : {
  selectedPlayer: string,
  playerClick: (e:any) => void,
  listId: string,
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
    <div className="flex flex-col items-center relative">
      <h3>
        {selectedPlayer ? firstLetterUpper(selectedPlayer) : 'Select Player'}
      </h3>
      <div>
        <input value={selectedPlayer} onChange={playerClick} list={listId} placeholder="select an option" />
        <datalist id={listId}>
          {searchedPlayers.map(player => 
            <option key={player} value={firstLetterUpper(player)} />  
          )}
        </datalist>
      </div>
    </div>
  )
}