'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllPlayers, searchArray, firstLetterUpper } from "@/utilities/utils";
import Loading from "../general/Loading";

export default function PlayerSelect() {
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
    <div className="flex flex-col items-center w-full">
      <input className="border-2 border-purple-300 focus:bg-inherit rounded-full py-2 px-4 text-xl text-gray-200 mb-6 drop-shadow-glow bg-gray-800 ease-in-out duration-500 focus:outline-none" placeholder="Enter Player's Name" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      {!players.length ? 
        <div className="mt-6"><Loading /></div>
      : searchInput.toLowerCase() === 'dear sasaki' ?
        <h1 className="text-center mt-10 text-red-400 text-3xl text-shadow-glow shadow-red-700 mx-20">
          Hi Dear!
        </h1>
      : !searchedPlayers.length ? 
        <h1 className="text-center mt-10 text-red-400 text-3xl text-shadow-glow shadow-red-700 mx-20">
          NO PLAYERS FOUND WITH THE NAME: {'"'}{searchInput.toUpperCase()}{'"'}
        </h1>
      :
        null}
      <ul className="text-center px-2 md:px-10">
        {searchedPlayers.map(player => 
          <li key={player} className="odd:text-gray-400 even:text-yellow-600 inline-block">
          <Link  href={`/players/${player}`}>
              <div className="hover:scale-110 duration-75 ease-out inline-block hover:text-shadow-glow shadow-yellow-600 text-sm md:text-lg px-3 py-1 font-thin hover:text-gray-200">
                {firstLetterUpper(player)}
              </div>
          </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
