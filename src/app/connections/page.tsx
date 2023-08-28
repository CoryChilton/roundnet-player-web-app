'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import ConnectionPlayerSelect from "@/components/connections/ConnectionPlayerSelect";
import ConnectionOptionMenu from "@/components/connections/ConnectionOptionMenu";


export default function Connections(){
  const [connectionType, setConnectionType]:['both' | 'teammates' | 'opponents', any] = useState('both');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const playerClick1 = (name:string) => {
    setPlayer1(name);
  }
  const playerClick2 = (name:string) => {
    setPlayer2(name);
  }
  const changeConnectionType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.textContent && setConnectionType(e.currentTarget.textContent.toLowerCase());
  }

  return (
    <div className="flex flex-col items-center mb-40 w-full px-2">
      <h1 className="font-bold text-4xl mb-4 text-shadow-glow shadow-yellow-700 text-gray-100">
        Connections
      </h1>
      <h2 className="text-gray-300 text-lg mb-6 text-center px-2">
        Choose which players you would like to find the connection between:
      </h2>
      <div className="flex flex-col md:flex-row mb-10 gap-8 w-full max-w-3xl">
          <ConnectionPlayerSelect label="First Player:" selectedPlayer={player1} playerClick={playerClick1} listId="1" first={true} />
          <ConnectionPlayerSelect label="Second Player:" selectedPlayer={player2} playerClick={playerClick2} listId="2" />
      </div>
      <ConnectionOptionMenu connectionType={connectionType} changeConnectionType={changeConnectionType} />
      <div className="mt-16"/>
      <Link href={{
        pathname: `/connections/${player1} ${player2}`,
        query: {source: `${player1.toLowerCase()}`, destination: `${player2.toLowerCase()}`, connectionType: `${connectionType}`}
      }} className="">
        <button disabled={!player1 || !player2} className="tut-button text-3xl text-pink-400 border-2 border-pink-400 px-8 py-3 rounded-lg text-shadow-tut shadow-tut shadow-pink-400 relative before:content-[''] before:absolute before:bg-pink-400 before:top-[120%] before:left-0 before:w-full before:h-full before:opacity-70 enabled:hover:before:opacity-100 before:duration-100 enabled:hover:text-[rgb(13,14,18)] enabled:hover:text-shadow-none enabled:hover:after:opacity-100 disabled:opacity-50 enabled:duration-500 disabled:before:opacity-0 disabled:before:duration-700 disabled:duration-500">
          Find Connection
        </button>
      </Link>
    </div>
  )
}



