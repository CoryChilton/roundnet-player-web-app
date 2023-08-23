'use client'
import { useState, useEffect } from "react";
import Link from "next/link";



export default function PlayersPage(){
  // state to control player search value
  const [searchInput, setSearchInput] = useState('');
  const [players, setPlayers]:[string[], any] = useState([]);

  useEffect(() => {
    getAllPlayers().then(players => setPlayers(players));
  }, []);

  //Making an array of the players that should show up on this search
  const searchedPlayers:string[] = [];
  for (let p of players) {
    if(p.toLowerCase().includes(searchInput.toLowerCase())){
      searchedPlayers.push(p);
    }
  }

  searchedPlayers.sort();
  
  return(
    <div className="flex flex-col items-center">
      <div>Players</div>
      <input className="border border-black" placeholder="Enter Player's Name" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      {searchedPlayers.map(player => 
        <Link key={player} href={`/players/${player}`}>
          <div className="text-gray-700 hover:text-black hover:scale-105 duration-100 ease-out">
            {player}
          </div>
        </Link>
      )}
    </div>
  )
}

async function getAllPlayers() {
  console.log('Getting all player names');
  const res = await fetch('http://localhost:80/api/allplayers' /*, {mode: 'no-cors'}*/);
  const allPlayers = await res.json();
  return allPlayers;
}