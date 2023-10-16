import CloseSVG from '../SVGs/CloseSVG'
import handleVisibility from '../../utils/handleVisibility'
import { useRef } from 'react'
import AddTaskForm from '../AddTaskForm'

interface currentTask {
  name: string
  details: string
  due: string
  priority: string
  project: string
  id: string
}

function AddItem ({
  setAddItemVisible,
  currentTask,
  taskArr,
  setTaskArr
}: {
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>
  currentTask: currentTask
  taskArr: {
    name: string
    details: string
    due: string
    priority: string
    project: string
    id: string
  }[]
  setTaskArr: React.Dispatch<
    React.SetStateAction<
      {
        name: string
        details: string
        due: string
        priority: string
        project: string
        id: string
      }[]
    >
  >
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
      <div className='bg-white w-80 grid grid-cols-[80px_1fr] grid-rows-[50px_1fr]'>
        <h2 className='col-span-full row-start-1 bg-blue-400 pl-2 pt-3 h-full'>
          Create New...
        </h2>
        <button
          aria-label='close-add-item'
          className='col-start-2 row-start-1 justify-self-end mr-2'
          onClick={() => handleVisibility.hide(setAddItemVisible)}
        >
          <CloseSVG classes='' color='#0f0f0f' width={20} />
        </button>
        <ul>
          <li>To Do</li>
          <li>Project</li>
          <li>Note</li>
        </ul>
        <AddTaskForm
          currentTask={currentTask}
          taskArr={taskArr}
          setTaskArr={setTaskArr}
          setAddItemVisible={setAddItemVisible}
        />
      </div>
    </div>
  )
}

export default AddItem
