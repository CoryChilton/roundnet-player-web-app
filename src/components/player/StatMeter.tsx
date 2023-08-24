export default function StatMeter({percent, label}:{percent: number, label: string}){
  const tickNums = Array(100);
  for(let i = 0; i<100; i++) {
    tickNums[i] = i;
  }
  return (
    <div className="relative w-64 aspect-square">
      <div>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">{percent}%<br/>{label}</h2>
        {tickNums.map(i =>
          <Tick key={i} degRot={Math.round(i * 36) / 10} colored={i < percent } />
        )}
      </div>
    </div>
  )
}

function Tick({degRot, colored}:{degRot:number, colored:boolean}) {
  return (
    <div className={`absolute left-1/2 w-[2px] h-4 origin-[50%_128px] opacity-0 animate-fade-in ${colored ? 'bg-yellow-500' : 'bg-gray-300'}`} style={{
      transform: `rotate(${degRot}deg)`, 
      animationDelay: `${degRot / 150}s`
    }}></div>
  )
}