'use client';
import { useState, useEffect } from "react";

interface pageProps{
  params: {slug: string}
}

export default function ConnectionPage({params}: pageProps) {
  const [connection, setConnection] = useState(null);
  // useEffect(() => {
  //   fetchConnection(`http://localhost:80/api/graph/both?${params.slug}`).then(data => setConnection(data));
  // }, []);
  // console.log(connection);

  return <div>{params.slug}</div>
}

async function fetchConnection(url:string) {
  console.log('Finding connection');
  const res = await fetch(url);
  const connection = await res.json();
  return connection;
}