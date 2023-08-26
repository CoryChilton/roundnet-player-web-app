'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import ConnectionPlayerSelect from "@/components/connections/ConnectionPlayerSelect";


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
      <ConnectionOptionMenu connectionType={connectionType} changeConnectionType={changeConnectionType} />
      <Link href={{
        pathname: `/connections/${player1} ${player2}`,
        query: {source: `${player1}`, destination: `${player2}`, connectionType: `${connectionType}`}
      }}>
        <button disabled={!player1 || !player2} className="bg-yellow-400 p-2 border border-black rounded-lg enabled:hover:bg-yellow-500 duration-200 ease-in-out disabled:opacity-70 mt-4">
          Find Connection!
        </button>
      </Link>
      <div className="flex gap-10">
        <div className="flex flex-col items-center">
          <h3>First Player:</h3>
          <ConnectionPlayerSelect selectedPlayer={player1} playerClick={playerClick1} listId="1" />
        </div>
        <div className="flex flex-col items-center">
          <h3>Second Player:</h3>
          <ConnectionPlayerSelect selectedPlayer={player2} playerClick={playerClick2} listId="2" />
        </div>
      </div>
    </div>
  )
}

function ConnectionOptionMenu({
  connectionType, 
  changeConnectionType
}:{
  connectionType:string, 
  changeConnectionType: (e: React.MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <div className="flex flex-col items-start relative">
      <button className="z-10" onClick={changeConnectionType}>Both</button>
      <button className="z-10" onClick={changeConnectionType}>Teammates</button>
      <button className="z-10" onClick={changeConnectionType}>Opponents</button>
      <div className={`absolute border border-white h-6 w-24 top-0 -left-1 z-0 ${connectionType === 'teammates' && 'translate-y-full'} ${connectionType === 'opponents' && 'translate-y-[200%]'} ${connectionType === 'both' && 'translate-y-0'}`} style={{transition: 'transform .3s ease-out'}}/>
    </div>
  )
}

