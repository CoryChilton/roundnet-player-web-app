import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="px-16 py-4 mb-4 flex flex-row items-center justify-between sticky top-0 bg-inherit border-b border-gray-600 z-10">
      <Link href="/" className="flex flex-row items-center hover:text-gray-300 duration-200">
        <Image src="/logo.png" alt="logo" width={20} height={20} className="inline-block " />
        <h1 className="text-xl font-semibold inline-block ml-2 whitespace-nowrap text-shadow-glow shadow-yellow-700">
          Roundent Player
        </h1>
      </Link>
      <div className="flex flex-row gap-6">
        <NavButton href="/">Home</NavButton>
        <NavButton href="/players">Players</NavButton>
        <NavButton href="/connections">Connections</NavButton>
        <NavButton href="/tournaments">Tournaments</NavButton>
      </div>
    </div>
  )
}

function NavButton({children, href}:{children:string, href:string}) {
  return (
    <Link href={href} className="font-light text-gray-300 hover:text-gray-100 duration-200">
      <button className="text-shadow-glow shadow-purple-600">
        {children}
      </button>
    </Link>
  )
}