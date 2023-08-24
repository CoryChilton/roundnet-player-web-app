export default function StatMeter({percent, label}:{percent: number, label: string}){
  const degrees = Array(100);
  for(let i = 0; i<100; i++) {
    degrees[i] = Math.round(i * 36) / 10;
  }
  console.log(degrees);
  return (
    <div className="relative bg-pink-800 w-64 aspect-square">
      <div>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">{percent}%<br/>{label}</h2>
        {degrees.map(deg =>
          <Tick key={deg} degRot={deg} />
        )}
      </div>
    </div>
  )
}

function Tick({degRot}:{degRot:number}) {
  return (
    <div className={`absolute left-1/2 w-[2px] h-4 bg-gray-300 origin-[50%_128px]`} style={{transform: `rotate(${degRot}deg)`}}></div>
  )
}