import CloseSVG from '../SVGs/CloseSVG'
import handleVisibility from '../../utils/handleVisibility'
import { useRef, useState } from 'react'
import AddTaskForm from '../AddTaskForm'
import AddProjectForm from '../AddProjectForm'

type objType = {
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
  setTaskArr,
  projectArr,
  setProjectArr,
  setFilterRange
}: {
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>
  currentTask: objType
  taskArr: objType[]
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>
  projectArr: string[]
  setProjectArr: React.Dispatch<React.SetStateAction<string[]>>
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const ref = useRef(null)
  const [formChoice, setFormChoice] = useState('task')

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
          <li
            className={
              formChoice === 'task'
                ? 'border-b-4 border-blue-400 w-3/4 h-6 mt-1 cursor-pointer'
                : 'h-6 mt-1 cursor-pointer'
            }
            onClick={() => setFormChoice('task')}
          >
            To Do
          </li>
          <li
            className={
              formChoice === 'project'
                ? 'border-b-4 border-blue-400 w-3/4 h-6 mt-1 cursor-pointer'
                : 'h-6 mt-1 cursor-pointer'
            }
            onClick={() => setFormChoice('project')}
          >
            Project
          </li>
        </ul>
        {formChoice === 'task' ? (
          <AddTaskForm
            currentTask={currentTask}
            taskArr={taskArr}
            setTaskArr={setTaskArr}
            setAddItemVisible={setAddItemVisible}
            projectArr={projectArr}
            newTask={true}
            setFilterRange={setFilterRange}
          />
        ) : formChoice === 'project' ? (
          <AddProjectForm
            projectArr={projectArr}
            setProjectArr={setProjectArr}
            setAddItemVisible={setAddItemVisible}
            setFilterRange={setFilterRange}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default AddItem
