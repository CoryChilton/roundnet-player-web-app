'use client';
import { useState, useEffect } from "react";
import Tournament from "@/utilities/tournament";
import Link from "next/link";

export default function TournamentsPage() {
  const [tournaments, setTournaments]:[Tournament[], any] = useState([]);
  useEffect(() => {
    fetchAllTournaments().then(tournaments => setTournaments(tournaments));
  }, []);

  tournaments.sort((t1, t2) => {
    if(t1.date < t2.date) {
      return -1;
    }
    return 1;
    });

  // if (!tournaments.length) {
  //   console.log('hello')
  //   return <h1 className="text-2xl font-bold text-center animate-pulse">Loading...</h1>
  // }
  return (

    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl mb-4">
        Tournaments
      </h1>
      <p className="text-lg mb-4">
        The tournaments that are included in the connections and statistics shown on this website.
      </p>
      {!tournaments.length ? <h1 className="text-2xl font-bold text-center animate-pulse">Loading...</h1> : null}
      <div>
        {tournaments.map(tournament => 
          <Link key={tournament.tournament_name} href={tournament.url}target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black hover:scale-105 duration-100 ease-out flex flex-row justify-between gap-8">
              <div>
                {tournament.date}
              </div>
              <div>
                {tournament.tournament_name}
              </div>
          </Link>
        )}
      </div>
    </div>
  )
}

async function fetchAllTournaments() {
  console.log('Getting all tournaments');
  const res = await fetch('http://localhost:80/tournaments/alltournaments');
  const allTournaments = await res.json();
  return allTournaments;
}