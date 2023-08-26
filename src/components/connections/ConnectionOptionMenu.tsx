export default function ConnectionOptionMenu({
  connectionType, 
  changeConnectionType
}:{
  connectionType:string, 
  changeConnectionType: (e: React.MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <div className="flex flex-col items-center text-lg text-gray-300">
      <h3>Choose connection type:</h3>
      <div className="mt-4 flex items-start relative text-gray-200 text-xl font-light">
        <button className="z-10 w-28 hover:text-white duration-150 focus:text-shadow-glow shadow-purple-300" onClick={changeConnectionType}>Teammates</button>
        <button className="z-10 w-28 hover:text-white duration-150 focus:text-shadow-glow shadow-yellow-300" onClick={changeConnectionType}>Both</button>
        <button className="z-10 w-28 hover:text-white duration-150 focus:text-shadow-glow shadow-pink-300" onClick={changeConnectionType}>Opponents</button>
        <div className={`absolute shadow-glow shadow-purple-800 h-10 w-28 -top-1 left-0 z-0 ${connectionType === 'both' && 'translate-x-full'} ${connectionType === 'opponents' && 'translate-x-[200%]'} ${connectionType === 'both' && 'translate-y-0'}`} style={{transition: 'transform .3s ease-out'}}/>
      </div>
    </div>
  )
}