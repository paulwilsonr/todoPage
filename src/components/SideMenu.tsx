import CloseSVG from "./SVGs/CloseSVG"

function SideMenu ({setAddItemVisible}: {setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className='absolute border border-black h-[90dvh] w-32 right-0 top-16 bg-white flex flex-col justify-between'>
      <ul className='ml-1'>
        <li>All</li>
        <li>Today</li>
        <li>Tomorrow</li>
        <li>Next 7 Days</li>
        <li>Projects</li>
        <li>Notes</li>
      </ul>
      <button onClick={()=> setAddItemVisible(true)} aria-label="new-item" className="border-2 border-black rounded-full w-16 h-16 grid self-center place-items-center rotate-45"><CloseSVG classes="" width={48} color="#000" /></button>
    </div>
  )
}

export default SideMenu
