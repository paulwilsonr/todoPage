import { useState } from 'react';
import TaskList from './TaskList';
import filterTasks from '../utils/filterTasks';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;
};

function ProjectCard({
  project,
  taskArr,
  setTaskArr,
  projectArr,
  setFilterRange,
}: {
  project: string;
  taskArr: Array<objType>;
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
  projectArr: string[];
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const projectFilter = ['project', project];
  return (
    <div>
      <h3
        className="ml-2 cursor-pointer text-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {project}
      </h3>
      {isOpen ? (
        <div className="ml-1">
          <TaskList
            tasksArr={filterTasks(taskArr, projectFilter)}
            setTaskArr={setTaskArr}
            projectArr={projectArr}
            setFilterRange={setFilterRange}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ProjectCard;
