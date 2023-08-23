'use client';
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

interface pageProps{
  params: {slug: string}
}

export default function ConnectionPage({params}: pageProps) {
  const [connection, setConnection] = useState(null);

  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  const destination = searchParams.get('destination');

  useEffect(() => {
    fetchConnection(`http://localhost:80/api/graph/both?source=${source}&destination=${destination}`).then(data => setConnection(data));
  }, []);
  console.log(connection[0]);

  return <div>{JSON.stringify(connection)}</div>
}

async function fetchConnection(url:string) {
  console.log('Finding connection');
  const res = await fetch(url);
  const connection = await res.json();
  return connection;
}