'use client'
import { useState, useEffect } from "react";
import PlayerSelect from "@/components/player/PlayerSelect";



export default function PlayersPage(){
  
  return(
    <div className="flex flex-col items-center pb-10">
      <h1 className="font-bold text-4xl mb-4 text-shadow-glow shadow-yellow-700 text-gray-100">
        Players
      </h1>
      <p className="max-w-2xl text-center text-gray-300 mb-4">
        Find statistics on any roundnet player that has participatedn in an STS tournament so far in the 2023 season.
      </p>
      <PlayerSelect />
    </div>
  )
}

