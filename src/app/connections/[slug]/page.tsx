'use client';
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Node, { defaultNode } from "@/utilities/connection";
import Loading from "@/components/general/Loading";
import { firstLetterUpper } from "@/utilities/utils";
import TeamNode from "@/components/connections/TeamNode";
import OpponentNode from "@/components/connections/OpponentNode";

interface pageProps{
  params: {slug: string}
}

export default function ConnectionPage({params}: pageProps) {
  const searchParams = useSearchParams();
  const source:string = searchParams.get('source') || 'player1';
  const destination:string = searchParams.get('destination') || 'player2';
  const connectionType:string = searchParams.get('connectionType') || 'both';

  const [connection, setConnection]:[Node[], any] = useState([defaultNode]);
  useEffect(() => {
    fetchConnection(`https://roundnetplayerwebapp-slti25qgza-uc.a.run.app/api/graph/${connectionType}?source=${source}&destination=${destination}`).then(data => setConnection(data));
  }, []);

  if(!connection.length) {
    return <div className="text-center mt-20 text-red-400 text-3xl text-shadow-glow shadow-red-700 mx-20">{`No connection found between ${source} and ${destination}`.toUpperCase()}</div>
  } else if (connection[0] === defaultNode) {
    return <div className="text-center mt-20"><Loading /></div>
  }

  const player1ListedFirst:boolean[] = source === connection[0].player1 ? [true] : [false];
  for (let i = 0; i < connection.length - 1; i++) {
    if (player1ListedFirst[player1ListedFirst.length-1] === true) {
      if(connection[i].player2 === connection[i+1].player1) {
        player1ListedFirst.push(true);
      } else {
        player1ListedFirst.push(false);
      }
    } else {
      if(connection[i].player1 === connection[i+1].player1) {
        player1ListedFirst.push(true);
      } else {
        player1ListedFirst.push(false);
      }
    }
  }

  return (
    <div className="flex flex-col items-center mb-10">
      <h1 className="font-bold text-4xl mb-4 text-shadow-glow shadow-yellow-700 text-gray-100">
        {firstLetterUpper(source)} &rarr; {firstLetterUpper(destination)}
      </h1>
      <h2 className="text-3xl font-extralight text-gray-400 mb-10">
        Via {connectionType === 'teammates' ? 'teammates' : connectionType === 'opponents' ? 'opponents' : 'both teammates and opponents'}
      </h2>
      {connection.map((node, i) =>
        <div key={i} className="flex flex-col items-center">
          {'tournament' in node ? 
            <TeamNode node={node} player1ListedFirst={player1ListedFirst[i]} /> 
          : 
            <OpponentNode node={node} player1ListedFirst={player1ListedFirst[i]} />
          }
          {i !== connection.length - 1 && <div className="w-px h-40 bg-gray-400 shadow-glow shadow-white" />}
        </div>
      )}
    </div>
  )
}

async function fetchConnection(url:string) {
  console.log('Finding connection');
  const res = await fetch(url);
  const connection = await res.json();
  return connection;
}