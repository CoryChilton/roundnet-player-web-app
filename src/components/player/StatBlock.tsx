import StatMeter from "./StatMeter"

export default function StatBlock({
  percent, 
  label, 
  won, 
  lost
} : {
  percent: number,
  label: string,
  won: number,
  lost: number
}) {
  return (
    <div className="flex flex-col items-center">
      <StatMeter percent={percent} label={label} />
      <div className="text-center text-2xl font-thin">
        <div className="mt-4 text-green-300">{won} Won</div>
        <div className="text-red-300">{lost} Lost</div>
      </div>
    </div>
  )
}
