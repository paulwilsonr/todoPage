import { useRef, useState } from 'react'
import handleVisibility from '../utils/handleVisibility'
import useAutosizeTextArea from '../utils/useAutosizeTextArea'
import handleTaskChanges from '../utils/handleTaskChanges'

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
  projectArr
}: {
  currentTask: objType
  taskArr: objType[]
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>
  projectArr: string[]
}) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [priorityChoice, setPriorityChoice] = useState('')
  const [task, setTask] = useState(currentTask)

  useAutosizeTextArea(textAreaRef.current, task.details)

  function changePriority (choice: string) {
    setPriorityChoice(choice)
  }

  function changeTaskData (taskKey: string, value: string) {
    let tempTask = { ...task }
    tempTask = { ...tempTask, [taskKey]: value }
    setTask(tempTask)
  }

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
          onChange={e => changeTaskData('name', e.target.value)}
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
          onChange={e => changeTaskData('details', e.target.value)}
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
          onChange={e => changeTaskData('due', e.target.value)}
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
              changePriority('low')
              changeTaskData('priority', 'low')
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
              changePriority('medium')
              changeTaskData('priority', 'medium')
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
              changePriority('high')
              changeTaskData('priority', 'high')
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
            onChange={e => changeTaskData('project', e.target.value)}
          >
            <option value='none'>None</option>
            {projectArr.map(project => {
              if(project === '') {
                return;
              }
              return (
                <option value={project}>{project}</option>
              )
            })}
          </select>
        </label>
        <button
          type='button'
          className='border px-2 border-black rounded-md bg-blue-400 mb-3'
          onClick={() => {
            handleTaskChanges.addTask(task, taskArr, setTaskArr);
            handleVisibility.hide(setAddItemVisible)
          }}
        >
          Create Task
        </button>
      </div>
    </div>
  )
}

export default AddTaskForm
