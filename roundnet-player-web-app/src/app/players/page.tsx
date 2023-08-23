'use client'
import { useState, useEffect } from "react";
import PlayerSelect from "@/components/player/PlayerSelect";



export default function PlayersPage(){
  
  return(
    <div className="flex flex-col items-center">
      <div>Players</div>
      <PlayerSelect />
    </div>
  )
}

