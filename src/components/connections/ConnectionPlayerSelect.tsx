import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllPlayers, searchArray, firstLetterUpper } from "@/utilities/utils";
import Loading from "../general/Loading";

export default function ConnectionPlayerSelect({
  selectedPlayer, 
  playerClick,
  listId,
  label,
  first
} : {
  selectedPlayer: string,
  playerClick: (e:any) => void,
  listId: string,
  label: string,
  first?: boolean
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
    <div className="flex flex-col items-center w-full">
      <h3 className="text-lg font-extralight text-gray-300 mb-2">
        {label}
      </h3>
      <div className="relative">
        {!selectedPlayer ? 
          <input value={searchInput} onChange={inputChange} placeholder="Select a player" className={`w-full focus:bg-gray-900 bg-[rgb(13,14,18)] text-3xl border border-gray-500 focus:drop-shadow-glow ease-in-out duration-500 rounded-full px-6 py-2 text-shadow-glow shadow-purple-600 text-gray-300 font-semibold placeholder:text-gray-500 placeholder:font-thin placeholder:text-shadow-none focus:outline-none relative ${first ? 'z-50' : 'z-30'}`} />
        :
          <h2 className="text-3xl text-shadow-glow shadow-purple-600 text-gray-300 font-semibold px-4 py-2 text-center">{selectedPlayer}</h2>
        }
        <div className={`absolute bg-gray-900 top-1/2 left-0 pt-8 w-full rounded-b-xl border-gray-500 border overflow-auto max-h-96 ${!searchInput && 'opacity-0 scale-y-0 -translate-y-1/2'} transition-transform ${first ? 'z-40' : 'z-20'}`}>
          {!players.length ?
            <h2 className="text-left pl-3 py-1 text-yellow-500 text-lg">Getting all player names...</h2>
          : !searchedPlayers.length ?
            <h2 className="text-center text-red-400 text-lg px-2">
              NO PLAYERS FOUND WITH THE NAME: {'"'}{searchInput.toUpperCase()}{'"'}
            </h2>
          : null
          }
          
          {searchedPlayers.map(player =>
            <button key={player} onClick={playerOptionSelect} className="block w-full text-left pl-3 py-1 text-gray-300 text-lg hover:bg-gray-700">{firstLetterUpper(player)}</button>
          )}
        </div>
      </div>
    </div>
  )
}