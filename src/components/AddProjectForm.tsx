import { useState } from 'react'
import handleVisibility from '../utils/handleVisibility'

function AddProjectForm ({
  projectArr,
  setProjectArr,
  setAddItemVisible
}: {
  projectArr: string[]
  setProjectArr: React.Dispatch<React.SetStateAction<string[]>>
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [project, setProject] = useState('')

  function handleSubmitNewProject () {
    const tempProjectArr = [...projectArr]
    tempProjectArr.push(project)
    setProjectArr(tempProjectArr)
    handleVisibility.hide(setAddItemVisible)
  }

  return (
    <div className='flex justify-between flex-col w-[250px] bg-white h-44 pr-1'>
      <label className='flex mt-2'>
        Title:
        <input
          className='ml-1'
          type='text'
          id='projectTitle'
          placeholder='Gym'
          value={project}
          onChange={e => setProject(e.target.value)}
        ></input>
      </label>
      <button
        type='button'
        className='border place-self-end px-2 border-black rounded-md bg-blue-400 mb-3'
        onClick={handleSubmitNewProject}
      >
        Create Project
      </button>
    </div>
  )
}

export default AddProjectForm
