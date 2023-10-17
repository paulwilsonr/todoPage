import CloseSVG from '../SVGs/CloseSVG'
import handleVisibility from '../../utils/handleVisibility'
import { useRef } from 'react'
import AddTaskForm from '../AddTaskForm'

type objType = {
  name: string
  details: string
  due: string
  priority: string
  project: string
  id: string
}

function EditTask ({
  setEditTaskVisible,
  task,
  taskArr,
  setTaskArr,
  projectArr
}: {
  setEditTaskVisible: React.Dispatch<React.SetStateAction<boolean>>
  task: objType
  taskArr: objType[]
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>
  projectArr: string[]
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
          handleVisibility.hide(setEditTaskVisible)
        }
      }}
    >
      <div className='bg-white w-80 grid grid-cols-[80px_1fr] grid-rows-[50px_1fr]'>
        <h2 className='col-span-full row-start-1 bg-blue-400 pl-2 pt-3 h-full'>
          Edit Task
        </h2>
        <button
          aria-label='close-add-item'
          className='col-start-2 row-start-1 justify-self-end mr-2'
          onClick={() => handleVisibility.hide(setEditTaskVisible)}
        >
          <CloseSVG classes='' color='#0f0f0f' width={20} />
        </button>

          <AddTaskForm
            currentTask={task}
            taskArr={taskArr}
            setTaskArr={setTaskArr}
            setAddItemVisible={setEditTaskVisible}
            projectArr={projectArr}
            newTask={false}
          />
        
      </div>
    </div>
  )
}

export default EditTask;
