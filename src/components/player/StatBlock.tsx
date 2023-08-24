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
      <div className="mt-4">{won} Won</div>
      <div>{lost} Lost</div>
    </div>
  )
}
