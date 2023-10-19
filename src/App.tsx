import TaskList from './components/TaskList';
import BurgerSVG from './components/SVGs/BurgerSVG';
import CloseSVG from './components/SVGs/CloseSVG';
import { useEffect, useState } from 'react';
import handleVisibility from './utils/handleVisibility';
import SideMenu from './components/SideMenu';
import AddItem from './components/Modals/AddItem';
import { v4 as uuidv4 } from 'uuid';
import filterTasks from './utils/filterTasks';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
};
const taskTemplate: objType = {
  name: '',
  details: '',
  due: '',
  priority: '',
  project: '',
  id: '',
};

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [taskArr, setTaskArr] = useState([taskTemplate]);
  const [addItemVisible, setAddItemVisible] = useState(false);
  const [projectArr, setProjectArr] = useState(['']);
  const [filterRange, setFilterRange] = useState(['all', 'none']);

  useEffect(() => {
    const savedTasks = localStorage.getItem('taskArr');
    const savedProjects = localStorage.getItem('projectArr');
    if (savedTasks) {
      const parsedSavedTasks: objType[] = JSON.parse(savedTasks);
      setTaskArr(parsedSavedTasks);
    } else {
      localStorage.setItem('taskArr', JSON.stringify([taskTemplate]));
    }

    if (savedProjects) {
      const parsedSavedProjects: string[] = JSON.parse(savedProjects);
      setProjectArr(parsedSavedProjects);
    } else {
      localStorage.setItem('projectArr', JSON.stringify(['']));
    }
  }, []);

  useEffect(() => {
    if (taskArr[0] !== taskTemplate) {
      localStorage.setItem('taskArr', JSON.stringify(taskArr));
    }
  }, [taskArr]);

  useEffect(() => {
    if (projectArr[0] !== '') {
      localStorage.setItem('projectArr', JSON.stringify(projectArr));
    }
  }, [projectArr]);

  return (
    <div className="h-screen">
      <header className="flex h-16 items-center justify-between bg-blue-400 px-2 sm:h-[5%]">
        <h1 className="text-5xl text-white">To-Do</h1>
        {menuVisible && window.innerWidth < 640 ? (
          <button
            aria-label="close-menu"
            onClick={() => handleVisibility.hide(setMenuVisible)}
          >
            <CloseSVG classes="" width={48} color="#fff" />
          </button>
        ) : (
          <button
            className=" sm:hidden"
            aria-label="open-menu"
            onClick={() => handleVisibility.open(setMenuVisible)}
          >
            <BurgerSVG classes="" />
          </button>
        )}
      </header>
      <div className="sm:flex sm:h-[95%]">
        {!menuVisible && window.innerWidth < 640 ? (
          ''
        ) : (
          <SideMenu
            setAddItemVisible={setAddItemVisible}
            setMenuVisible={setMenuVisible}
            projectArr={projectArr}
            setFilterRange={setFilterRange}
          />
        )}
        <div className="w-full">
          <h2 className="ml-3 text-2xl">
            {filterRange[0] !== 'project'
              ? filterRange[0].slice(0, 1).toUpperCase() +
                filterRange[0].slice(1)
              : filterRange[1].slice(0, 1).toUpperCase() +
                filterRange[1].slice(1)}
          </h2>
          <TaskList
            tasksArr={filterTasks(taskArr, filterRange)}
            setTaskArr={setTaskArr}
            projectArr={projectArr}
            setFilterRange={setFilterRange}
          />
        </div>
      </div>
      {addItemVisible ? (
        <AddItem
          currentTask={{
            name: '',
            details: '',
            due: '',
            priority: '',
            project: 'none',
            id: uuidv4(),
          }}
          setAddItemVisible={setAddItemVisible}
          taskArr={taskArr}
          setTaskArr={setTaskArr}
          projectArr={projectArr}
          setProjectArr={setProjectArr}
          setFilterRange={setFilterRange}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
