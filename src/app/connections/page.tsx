'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import ConnectionPlayerSelect from "@/components/connections/ConnectionPlayerSelect";
import ConnectionOptionMenu from "@/components/connections/ConnectionOptionMenu";


export default function Connections(){
  const [connectionType, setConnectionType]:['both' | 'teammates' | 'opponents', any] = useState('both');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const playerClick1 = (e:any) => {
    setPlayer1((e.target.value).toLowerCase());
  }
  const playerClick2 = (e:any) => {
    setPlayer2((e.target.value).toLowerCase());
  }
  const changeConnectionType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.textContent && setConnectionType(e.currentTarget.textContent.toLowerCase());
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl mb-4 text-shadow-glow shadow-yellow-700 text-gray-100">
        Connections
      </h1>
      <h2 className="text-gray-300 text-lg mb-4">
        Choose which players you would like to find the connection between:
      </h2>
      <div className="flex gap-10 mb-6">
        <div className="flex flex-col items-center">
          <h3>First Player:</h3>
          <ConnectionPlayerSelect selectedPlayer={player1} playerClick={playerClick1} listId="1" />
        </div>
        <div className="flex flex-col items-center">
          <h3>Second Player:</h3>
          <ConnectionPlayerSelect selectedPlayer={player2} playerClick={playerClick2} listId="2" />
        </div>
      </div>
      <ConnectionOptionMenu connectionType={connectionType} changeConnectionType={changeConnectionType} />
      <Link href={{
        pathname: `/connections/${player1} ${player2}`,
        query: {source: `${player1}`, destination: `${player2}`, connectionType: `${connectionType}`}
      }}>
        <button disabled={!player1 || !player2} className="bg-yellow-400 p-2 border border-black rounded-lg enabled:hover:bg-yellow-500 duration-200 ease-in-out disabled:opacity-70 mt-8">
          Find Connection!
        </button>
      </Link>
    </div>
  )
}



