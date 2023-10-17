import CloseSVG from './SVGs/CloseSVG'
import handleVisibility from '../utils/handleVisibility'

function SideMenu ({
  setAddItemVisible,
  setMenuVisible,
  projectArr
}: {
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
  projectArr: string[]
}) {
  let projKey = 0

  return (
    <div className='absolute border border-black h-[90dvh] w-32 right-0 top-16 bg-white flex flex-col justify-between'>
      <ul className='ml-1'>
        <li>All</li>
        <li>Today</li>
        <li>Tomorrow</li>
        <li>Next 7 Days</li>
        <li>
          Projects
          <ul>
            {projectArr.map(project => {
              projKey++
              return <li key={projKey}>{project}</li>
            })}
          </ul>
        </li>
        <li>Notes</li>
      </ul>
      <button
        onClick={() => {
          handleVisibility.open(setAddItemVisible)
          handleVisibility.hide(setMenuVisible)
        }}
        aria-label='new-item'
        className='border-2 border-black rounded-full w-16 h-16 grid self-center place-items-center rotate-45'
      >
        <CloseSVG classes='' width={48} color='#000' />
      </button>
    </div>
  )
}

export default SideMenu
