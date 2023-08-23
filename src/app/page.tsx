import Link from "next/link"

export default function Home() {
  return (
    <main className="mx-8 flex flex-col items-center">
      <h1 className="font-bold text-4xl mb-4 text-shadow-glow shadow-yellow-700 text-gray-100">
        Home
      </h1>
      <p className="max-w-2xl text-center text-gray-300">
        If you are an avid roundnet player or fan you have come to the right place. Navigate to the players page to find statistics on any roundnet player that has participated in an STS tournament so far in the 2023 season. All tournaments included can be found on the tournaments page. Navigate to the connections page to find how two players are connected to each other through tournament partners and opponents.
      </p>
    </main>
  )
}
