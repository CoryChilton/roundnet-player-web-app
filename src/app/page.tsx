import Link from "next/link"

export default function Home() {
  return (
    <main className="mx-8 flex flex-col items-center">
      <h1 className="font-bold text-4xl mb-4 text-shadow-glow shadow-yellow-700 text-gray-100">
        Home
      </h1>
      <h2 className="text-3xl text-gray-300 mb-4 text-center">
        Welcome roundnet players and fans!
      </h2>
      <p className="max-w-4xl text-center text-gray-300 mb-4">
        If you are an avid roundnet player or fan you have come to the right place. Navigate to the players page to find statistics on any roundnet player that has participated in an STS tournament in the 2023 season. All tournaments included can be found on the tournaments page. Navigate to the connections page to find how two players are connected to each other through tournament partners and opponents.
      </p>
      <p className="max-w-4xl text-center text-gray-300">
        <span className="text-shadow-glow shadow-red-500 text-red-500">Note: </span>This website is in its beta testing phase (although the creators are alpha &#128526;) to see if there is interest in this type of application. More tournament data will be added in the future.
      </p>
    </main>
  )
}
