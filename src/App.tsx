import TaskList from './components/TaskList'
import BurgerSVG from './components/SVGs/BurgerSVG'
import CloseSVG from './components/SVGs/CloseSVG'
import { useState } from 'react'
import handleVisibility from './utils/handleVisibility'
import SideMenu from './components/SideMenu'
import AddItem from './components/Modals/AddItem'
import { v4 as uuidv4 } from 'uuid'

const testTaskArr = [
  {
    name: 'testTask1',
    details: 'test test test details',
    due: '10-27-2023',
    priority: 'low',
    project: 'none',
    id: "1"
  },
  {
    name: 'testTask2',
    details: 'test test test details2',
    due: '03-24-2024',
    priority: 'low',
    project: 'none',
    id: "2"
  }
]

function App () {
  const [menuVisible, setMenuVisible] = useState(false);
  const [taskArr, setTaskArr] = useState(testTaskArr);
  const [addItemVisible, setAddItemVisible] = useState(false);

  return (
    <div>
      <header className='flex justify-between items-center bg-blue-400 h-16 px-2'>
        <h1 className='text-white text-5xl'>To-Do</h1>
        {menuVisible ? (
          <button aria-label='close-menu' onClick={() => handleVisibility.hide(setMenuVisible)}>
            <CloseSVG
              classes=''
              width={48}
              color='#fff'
            />
          </button>
        ) : (
          <button aria-label='open-menu' onClick={() => handleVisibility.open(setMenuVisible)}>
            <BurgerSVG
              classes=''
            />
          </button>
        )}
      </header>
      {menuVisible ? <SideMenu setAddItemVisible={setAddItemVisible} setMenuVisible={setMenuVisible} /> : ''}
      <TaskList tasksArr={taskArr} />
      {addItemVisible? <AddItem currentTask={{
    name: '',
    details: '',
    due: '',
    priority: '',
    project: 'none',
    id: uuidv4()
  }}  setAddItemVisible={setAddItemVisible} taskArr={taskArr} setTaskArr={setTaskArr} />: ''}
    </div>
  )
}

export default App
