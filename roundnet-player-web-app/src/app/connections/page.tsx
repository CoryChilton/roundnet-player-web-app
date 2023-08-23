'use client'
import { useState, useEffect } from "react";
import { getAllPlayers, searchArray } from "@/utilities/utils";
import ConnectionPlayerSelect from "@/components/connections/ConnectionPlayerSelect";


export default function Connections(){
  // const [connection, setConnection] = useState(null);
  // useEffect(() => {
  //   fetchConnection().then(data => setConnection(data));
  // }, []);
  // console.log(connection);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const playerClick1 = (e:any) => {
    setPlayer1(e.target.textContent);
  }
  const playerClick2 = (e:any) => {
    setPlayer2(e.target.textContent);
  }


  return (
    <div>
      <div className="text-center">
        Connections
      </div>
      <div className="flex justify-around">
        <ConnectionPlayerSelect selectedPlayer={player1} playerClick={playerClick1} />
        <ConnectionPlayerSelect selectedPlayer={player2} playerClick={playerClick2} />
      </div>
    </div>
  )
}

// async function fetchConnection() {
//   console.log('Finding connection');
//   const res = await fetch('http://localhost:80/api/graph/both?source=cory%20chilton&destination=arrow%20griner');
//   const connection = await res.json();
//   return connection;
// }