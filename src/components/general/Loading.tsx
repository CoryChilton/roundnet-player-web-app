import Image from "next/image";

export default function Loading() {
  return (
    <div className="text-2xl font-bold animate-pulse">
      <h1 className="inline-block">
        L
      </h1>
      <Image src="/logo.png" alt="logo" width={20} height={20} className="inline-block animate-bounce mb-1"/>
      <h1 className="inline-block">
        ADING...
      </h1>
    </div>
  )
}