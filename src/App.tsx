import TaskList from './components/TaskList'
import BurgerSVG from './components/SVGs/BurgerSVG'
import CloseSVG from './components/SVGs/CloseSVG'
import { useEffect, useState } from 'react'
import handleVisibility from './utils/handleVisibility'
import SideMenu from './components/SideMenu'
import AddItem from './components/Modals/AddItem'
import { v4 as uuidv4 } from 'uuid'

type objType = {
  name: string
  details: string
  due: string
  priority: string
  project: string
  id: string
}
const taskTemplate:objType = {
    name: '',
    details: '',
    due: '',
    priority: '',
    project: '',
    id: '',
  }

function App () {
  
  const [menuVisible, setMenuVisible] = useState(false)
  const [taskArr, setTaskArr] = useState([taskTemplate])
  const [addItemVisible, setAddItemVisible] = useState(false)
  const [projectArr, setProjectArr] = useState([''])

useEffect(() => {
  const savedTasks = localStorage.getItem('taskArr')
  const savedProjects = localStorage.getItem('projectArr')
  if(savedTasks) {
    const parsedSavedTasks: objType[] = JSON.parse(savedTasks)
    setTaskArr(parsedSavedTasks)
  } else {
    localStorage.setItem('taskArr', JSON.stringify([taskTemplate]))
  }

  if(savedProjects) {
    const parsedSavedProjects: string[] = JSON.parse(savedProjects)
    setProjectArr(parsedSavedProjects)
    console.log(localStorage.getItem('projectArr'))
  } else {
    localStorage.setItem('projectArr', JSON.stringify(['']))
  }


  // if(localStorage.taskArr) {
    
  //   // const savedTasks = localStorage.getItem("taskArr")
  //   console.log(savedTasks)
  //   if(savedTasks){
  //     setTaskArr(JSON.parse(savedTasks))
  //   }
  // } else {
  //   localStorage.setItem('taskArr', JSON.stringify([{
  //     name: '',
  //     details: '',
  //     due: '',
  //     priority: '',
  //     project: '',
  //     id: '',
  //   }]));
  // }
  // if(localStorage.projectArr) {
  //   const savedProjects = localStorage.getItem("projectArr")
  //   if(savedProjects) {setProjectArr(JSON.parse(savedProjects))}
  // } else {
  //   localStorage.setItem('projectArr', JSON.stringify(['']));
  // }
}, [])

useEffect(() => {
  if(taskArr[0] !== taskTemplate) {
    localStorage.setItem('taskArr', JSON.stringify(taskArr))
  }
}, [taskArr])

// useEffect(() => {
//   if()
// })

useEffect(() => {
  if(projectArr[0] !== ''){
    localStorage.setItem('projectArr', JSON.stringify(projectArr))
  }
}, [projectArr])

  return (
    <div>
      <header className='flex justify-between items-center bg-blue-400 h-16 px-2'>
        <h1 className='text-white text-5xl'>To-Do</h1>
        {menuVisible ? (
          <button
            aria-label='close-menu'
            onClick={() => handleVisibility.hide(setMenuVisible)}
          >
            <CloseSVG classes='' width={48} color='#fff' />
          </button>
        ) : (
          <button
            aria-label='open-menu'
            onClick={() => handleVisibility.open(setMenuVisible)}
          >
            <BurgerSVG classes='' />
          </button>
        )}
      </header>
      {menuVisible ? (
        <SideMenu
          setAddItemVisible={setAddItemVisible}
          setMenuVisible={setMenuVisible}
          projectArr={projectArr}
        />
      ) : (
        ''
      )}
      <TaskList
        tasksArr={taskArr}
        setTaskArr={setTaskArr}
        projectArr={projectArr}
      />
      {addItemVisible ? (
        <AddItem
          currentTask={{
            name: '',
            details: '',
            due: '',
            priority: '',
            project: 'none',
            id: uuidv4()
          }}
          setAddItemVisible={setAddItemVisible}
          taskArr={taskArr}
          setTaskArr={setTaskArr}
          projectArr={projectArr}
          setProjectArr={setProjectArr}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default App
