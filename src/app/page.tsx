import Link from "next/link"

export default function Home() {
  return (
    <main className="mx-8 flex flex-col items-center mb-20">
      <h1 className="font-bold text-4xl mb-4 text-shadow-glow shadow-yellow-700 text-gray-100">
        Home
      </h1>
      <h3 className="text-3xl text-gray-300 mb-4 text-center">
        Welcome roundnet players and fans!
      </h3>
      <div className="max-w-3xl">
        <Link href="/players">
          <button className="block text-left w-full outline outline-purple-400 mb-4 py-2 px-3 rounded-xl shadow-tut shadow-purple-400 hover:scale-x-105 transition">
            <h2 className="text-4xl font-bold text-purple-400 text-shadow-glow shadow-purple-400">
              Players
            </h2>
            <p className="text-gray-300 font-extralight">Roundnet player statistics</p>
          </button>
        </Link>
        <Link href="/connections" className="bg-white">
          <button className="block text-left w-full outline outline-pink-400 mb-2 py-2 px-3 rounded-xl shadow-tut shadow-pink-500 hover:scale-x-105 transition">
            <h2 className="text-4xl font-bold text-pink-500 text-shadow-glow shadow-pink-500">
              Connections
            </h2>
            <p className="text-gray-300 font-extralight">Connections between roundnet players</p>
          </button>
        </Link>
        <p className="text-gray-300 my-4 font-light text-justify">
          If you are an avid roundnet player or fan you have come to the right place. Navigate to the players page to find statistics on any roundnet player that has participated in an STS tournament in the 2023 season. All tournaments included can be found on the tournaments page. Navigate to the connections page to find how two players are connected to each other through tournament partners and opponents.
        </p>
        <p className="text-gray-300 text-justify">
          <span className="text-shadow-glow shadow-red-500 text-red-500">Note: </span>This website is in its beta testing phase (although the creators are alpha &#128526;) to see if there is interest in this type of application. More tournament data will be added in the future.
        </p>
      </div>
    </main>
  )
}
