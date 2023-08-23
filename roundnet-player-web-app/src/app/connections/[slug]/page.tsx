'use client';
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Node from "@/utilities/connection";

interface pageProps{
  params: {slug: string}
}

export default function ConnectionPage({params}: pageProps) {
  const [connection, setConnection]:[Node[], any] = useState([]);

  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  const destination = searchParams.get('destination');

  useEffect(() => {
    fetchConnection(`http://localhost:80/api/graph/both?source=${source}&destination=${destination}`).then(data => setConnection(data));
  }, []);

  if (!connection.length) {
    return <h1 className="text-2xl font-bold text-center animate-bounce">Loading...</h1>
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