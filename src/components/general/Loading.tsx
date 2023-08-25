import Image from "next/image";

export default function Loading() {
  return (
    <div className="text-5xl font-bold animate-pulse text-shadow-glow shadow-yellow-400">
      <h1 className="inline-block">
        L
      </h1>
      <Image priority={true} src="/logo.png" alt="logo" width={40} height={20} className="inline-block animate-bounce mb-3 h-auto"/>
      <h1 className="inline-block">
        ADING...
      </h1>
    </div>
  )
}