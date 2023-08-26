'use client';
import { useState, useEffect } from "react";
import Tournament from "@/utilities/tournament";
import Link from "next/link";
import Loading from "@/components/general/Loading";
import { tournamentDict } from "@/utilities/tournament";

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
  return (

    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl mb-4 text-shadow-glow shadow-yellow-700 text-gray-100">
        Tournaments
      </h1>
      <p className="text-lg mb-4 text-gray-300">
        The tournaments that are included in the connections and statistics shown on this website.
      </p>
      {!tournaments.length && <Loading />}
      <div className="flex flex-col gap-px">
        {tournaments.map(tournament => 
          <Link key={tournament.tournament_name} href={tournament.url}target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 hover:scale-105 duration-100 ease-out flex flex-row justify-between gap-x-8">
              <div>
                {tournament.date}
              </div>
              <div>
                {tournamentDict.get(tournament.tournament_name)}
              </div>
          </Link>
        )}
      </div>
    </div>
  )
}

async function fetchAllTournaments() {
  console.log('Getting all tournaments');
  const res = await fetch('https://roundnetplayerwebapp-slti25qgza-uc.a.run.app/tournaments/alltournaments');
  const allTournaments = await res.json();
  return allTournaments;
}