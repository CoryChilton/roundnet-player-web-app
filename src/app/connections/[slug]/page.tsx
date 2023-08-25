'use client';
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Node, { defaultNode } from "@/utilities/connection";
import Loading from "@/components/general/Loading";
import { firstLetterUpper } from "@/utilities/utils";

interface pageProps{
  params: {slug: string}
}

export default function ConnectionPage({params}: pageProps) {
  const [connection, setConnection]:[Node[], any] = useState([defaultNode]);

  const searchParams = useSearchParams();
  const source:string = searchParams.get('source') || 'player1';
  const destination:string = searchParams.get('destination') || 'player2';
  const connectionType:string = searchParams.get('connectionType') || 'both';

  useEffect(() => {
    fetchConnection(`http://localhost:80/api/graph/${connectionType}?source=${source}&destination=${destination}`).then(data => setConnection(data));
  }, []);

  if(!connection.length) {
    return <div className="text-center mt-20 text-red-400 text-3xl text-shadow-glow shadow-red-700 mx-20">{`No connection found between ${source} and ${destination}`.toUpperCase()}</div>
  } else if (connection[0] === defaultNode) {
    return <div className="text-center mt-20"><Loading /></div>
  }
  return (
    <div>
        {connection.map(node =>
          <div key={node.node1}>
            {JSON.stringify(node)}
            <br /> <br />
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