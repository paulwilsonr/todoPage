import CloseSVG from '../SVGs/CloseSVG'
import handleVisibility from '../../utils/handleVisibility'
import { useRef } from 'react'
import AddTaskForm from '../AddTaskForm'

function AddItem ({
  setAddItemVisible
}: {
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>
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
          handleVisibility.hide(setAddItemVisible)
        }
      }}
    >
      <div className='bg-white w-72 grid grid-cols-2 grid-rows-[50px_1fr] pl-2'>
        <h2 className='col-span-full row-start-1 self-center'>Create New...</h2>
        <button
          aria-label='close-details'
          className='col-start-2 row-start-1 justify-self-end mr-2 mt-2'
          onClick={() => handleVisibility.hide(setAddItemVisible)}
        >
          <CloseSVG classes='' color='#0f0f0f' width={20} />
        </button>
        <ul>
          <li>To Do</li>
          <li>Project</li>
          <li>Note</li>
        </ul>
        <AddTaskForm />
      </div>
    </div>
  )
}

export default AddItem
