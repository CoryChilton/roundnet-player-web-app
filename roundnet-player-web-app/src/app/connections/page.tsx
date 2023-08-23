'use client'
import { useState, useEffect } from "react";

export default function Connections(){
  const [connection, setConnection] = useState(null);
  useEffect(() => {
    fetchConnection().then(data => setConnection(data));
  }, []);
  console.log(connection);

  return (
    <div>
      Connections
    </div>
  )
}

async function fetchConnection() {
  console.log('Finding connection');
  const res = await fetch('http://localhost:80/api/graph/both?source=cory%20chilton&destination=arrow%20griner');
  const connection = await res.json();
  return connection;
}