import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';
import AddItem from './components/Modals/AddItem';
import { v4 as uuidv4 } from 'uuid';
import filterTasks from './utils/filterTasks';
import AddNewItemButton from './components/AddNewItemButton';
import ProjectList from './components/ProjectList';
import FilterDropdown from './components/FilterDropdown';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;
};
const taskTemplate: objType = {
  name: '',
  details: '',
  due: '',
  priority: '',
  project: '',
  id: '',
  completed: false,
};

function App() {
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
    <div className="h-screen font-sans">
      <div className="sm:flex sm:h-[95%]">
        <div className="w-full">
          <FilterDropdown setFilterRange={setFilterRange} />
          <TaskList
            tasksArr={filterTasks(taskArr, filterRange)}
            setTaskArr={setTaskArr}
            projectArr={projectArr}
            setFilterRange={setFilterRange}
          />
        </div>
        <ProjectList
          projectArr={projectArr}
          taskArr={taskArr}
          setTaskArr={setTaskArr}
          setFilterRange={setFilterRange}
        />
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
            completed: false,
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
      <AddNewItemButton setAddItemVisible={setAddItemVisible} />
    </div>
  );
}

export default App;
