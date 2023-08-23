'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import ConnectionPlayerSelect from "@/components/connections/ConnectionPlayerSelect";


export default function Connections(){
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const playerClick1 = (e:any) => {
    setPlayer1(e.target.textContent);
  }
  const playerClick2 = (e:any) => {
    setPlayer2(e.target.textContent);
  }


  return (
    <div className="flex flex-col items-center">
      <h1 className="">
        Connections
      </h1>
      <Link href={{
        pathname: `/connections/${player1} ${player2}`,
        query: {source: `${player1}`, destination: `${player2}`}
      }}>
        <button className="bg-yellow-400 p-2 border border-black rounded-lg hover:bg-yellow-500 duration-200 ease-in-out">
          Find Connection!
        </button>
      </Link>
      <div className="flex gap-10">
        <ConnectionPlayerSelect selectedPlayer={player1} playerClick={playerClick1} />
        <ConnectionPlayerSelect selectedPlayer={player2} playerClick={playerClick2} />
      </div>
    </div>
  )
}

