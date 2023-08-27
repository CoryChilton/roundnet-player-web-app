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
  const inputChange = (e:any) => {
    setSearchInput(e.target.value);
  };
  const playerOptionSelect = (e:any) => {
    setSearchInput(e.currentTarget.textContent || '');
    playerClick(e.currentTarget.textContent);
    setSearchInput('')
  }

  useEffect(() => {
    getAllPlayers().then(players => setPlayers(players));
  }, []);

  //Making an array of the players that should show up on this search
  const searchedPlayers:string[] = searchArray(players, searchInput);
  searchedPlayers.sort();

  return (
    <div className="flex flex-col items-center relative w-full">
      <h3 className="text-lg font-extralight text-gray-300 mb-2">
        {label}
      </h3>
      {!selectedPlayer ? 
        <input value={searchInput} onChange={inputChange} placeholder="Select a player" className="w-full focus:bg-gray-900 bg-inherit text-3xl border border-gray-500 drop-shadow-glow ease-in-out duration-500 rounded-full px-6 py-2 text-shadow-glow shadow-purple-600 text-gray-300 font-semibold placeholder:text-gray-500 placeholder:font-thin placeholder:text-shadow-none focus:outline-none" />
      :
        <h2 className="text-3xl text-shadow-glow shadow-purple-600 text-gray-300 font-semibold px-4 py-2 text-center">{selectedPlayer}</h2>
      }
      <div className={`absolute bg-gray-900 top-full left-0 pt-2 w-full z-20 rounded-xl border-gray-800 border overflow-auto max-h-96 ${!searchInput && 'hidden'}`}>
        {searchedPlayers.map(player =>
          <button key={player} onClick={playerOptionSelect} className="block w-full text-left pl-3 py-1 text-gray-300 text-lg hover:bg-gray-700">{firstLetterUpper(player)}</button>
        )}

      </div>
    </div>
    // <div className="flex flex-col items-center relative w-full">
    //   <h3 className="text-lg font-extralight text-gray-300 mb-2">{label}</h3>
    //   <div>
    //     <input value={selectedPlayer} onChange={playerClick} list={listId} placeholder="Select a player" className="w-full focus:bg-gray-900 bg-inherit text-3xl border border-gray-500 drop-shadow-glow ease-in-out duration-500 rounded-full px-4 py-2 text-shadow-glow shadow-purple-600 text-gray-300 font-semibold placeholder:text-gray-500 placeholder:font-thin placeholder:text-shadow-none focus:outline-none" />
    //     <datalist id={listId} >
    //       {searchedPlayers.map(player => 
    //         <option key={player} value={firstLetterUpper(player)} />  
    //       )}
    //     </datalist>
    //   </div>
    // </div>
  )
}