import CloseSVG from '../SVGs/CloseSVG'
import handleVisibility from '../../utils/handleVisibility'
import { useRef } from 'react'
import formatDate from '../../utils/formatDate'

type objType = {
  name: string
  details: string
  due: string
  priority: string
  project: string
  id: string
}

function TaskDetails ({
  setDetailsVisible,
  task
}: {
  setDetailsVisible: React.Dispatch<React.SetStateAction<boolean>>
  task: objType
}) {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      className='absolute bg-greyedOut w-full h-full inset-0 flex justify-center items-center'
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== ref.current) {
          return null
        } else {
          handleVisibility.hide(setDetailsVisible)
        }
      }}
    >
      <div className='bg-white w-72 grid grid-cols-2 grid-rows-5 pl-2'>
        <p className='col-span-full row-start-1 pt-2'>{task.name}</p>
        <button aria-label='close-details' className='col-start-2 row-start-1 justify-self-end mr-2 mt-2' onClick={() => handleVisibility.hide(setDetailsVisible)}>
        <CloseSVG
          classes=''
          color='#0f0f0f'
          width={20}
        /></button>
        <p className='col-span-full'>{task.project}</p>
        <p className='col-span-full'>{task.priority}</p>
        <p className='col-span-full'>{formatDate(task.due, false)}</p>
        <p className='col-span-full'>{task.details}</p>
      </div>
    </div>
  )
}

export default TaskDetails
