export default function StatMeter({percent, label}:{percent: number, label: string}){
  return <div>{label}: {percent}%</div>
}