import { useRef, useState } from 'react'
import handleVisibility from '../utils/handleVisibility'
import useAutosizeTextArea from '../utils/useAutosizeTextArea'
import formFunctions from '../utils/formFunctions'

type objType = {
  name: string
  details: string
  due: string
  priority: string
  project: string
  id: string
}

function AddTaskForm ({
  currentTask,
  taskArr,
  setTaskArr,
  setAddItemVisible,
  projectArr,
  newTask,
  setFilterRange
}: {
  currentTask: objType
  taskArr: objType[]
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>
  projectArr: string[]
  newTask: boolean
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [priorityChoice, setPriorityChoice] = useState(currentTask.priority)
  const [task, setTask] = useState(currentTask)

  useAutosizeTextArea(textAreaRef.current, task.details)

  return (
    <div className='w-[250px] bg-white'>
      <label className='flex mt-2'>
        Title:
        <input
          className='ml-1'
          type='text'
          id='taskTitle'
          placeholder='Pay bills'
          value={task.name}
          onChange={e => formFunctions.changeTaskData('name', e.target.value, task, setTask)}
        ></input>
      </label>
      <label className='flex mt-2'>
        Details:
        <textarea
          ref={textAreaRef}
          className='ml-1 w-[185px] h-6'
          id='taskDetails'
          placeholder='eg. internet, phone, rent'
          value={task.details}
          onChange={e => formFunctions.changeTaskData('details', e.target.value, task, setTask)}
        ></textarea>
      </label>
      <label className='flex my-2'>
        Due Date:
        <input
          className='ml-1'
          type='date'
          id='taskDate'
          placeholder='MM/DD/YYYY'
          value={task.due}
          onChange={e => {
            formFunctions.changeTaskData('due', e.target.value, task, setTask)
          }}
        ></input>
      </label>
      <label>
        Priority:
        <label
          className={
            priorityChoice === 'low'
              ? 'ml-2 border border-black py-0.5 px-1 rounded-md bg-blue-400'
              : 'ml-2 border border-black py-0.5 px-1 rounded-md '
          }
        >
          Low
          <input
            onClick={() => {
              formFunctions.changePriority('low', setPriorityChoice)
              formFunctions.changeTaskData('priority', 'low', task, setTask)
            }}
            className='appearance-none'
            type='radio'
            id='lowPriority'
            name='taskPriority'
            value='low'
          ></input>
        </label>
        <label
          className={
            priorityChoice === 'medium'
              ? 'ml-2 border border-black py-0.5 px-1 rounded-md bg-blue-400'
              : 'ml-2 border border-black py-0.5 px-1 rounded-md '
          }
        >
          Medium
          <input
            onClick={() => {
              formFunctions.changePriority('medium', setPriorityChoice)
              formFunctions.changeTaskData('priority', 'medium', task, setTask)
            }}
            className='appearance-none bg-black hover:bg-blue-400'
            type='radio'
            id='mediumPriority'
            name='taskPriority'
            value='medium'
          ></input>
        </label>
        <label
          className={
            priorityChoice === 'high'
              ? 'ml-2 border border-black py-0.5 px-1 rounded-md bg-blue-400'
              : 'ml-2 border border-black py-0.5 px-1 rounded-md '
          }
        >
          High
          <input
            onClick={() => {
              formFunctions.changePriority('high', setPriorityChoice)
              formFunctions.changeTaskData('priority', 'high', task, setTask)
            }}
            className='appearance-none bg-black hover:bg-blue-400'
            type='radio'
            id='highPriority'
            name='taskPriority'
            value='high'
          ></input>
        </label>
      </label>
      <div className='flex justify-between pr-1 mt-3'>
        <label>
          Project:
          <select
            className='ml-1'
            id='taskProject'
            onChange={e => formFunctions.changeTaskData('project', e.target.value, task, setTask)}
          >
            <option value='none'>None</option>
            {projectArr.map((project, index) => {
              if (project === '') {
                return
              }
              return <option key={index} value={project}>{project}</option>
            })}
          </select>
        </label>
        <button
          type='button'
          className='border px-2 border-black rounded-md bg-blue-400 mb-3'
          onClick={() => {
            formFunctions.handleSubmit(newTask, task, taskArr, setTaskArr, currentTask, setFilterRange)
            handleVisibility.hide(setAddItemVisible)
          }}
        >
          {newTask ? 'Create Task' : 'Update Task'}
        </button>
      </div>
    </div>
  )
}

export default AddTaskForm
