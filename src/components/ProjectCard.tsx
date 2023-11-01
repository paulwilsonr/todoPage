import { useState } from 'react';
import TaskList from './TaskList';
import TrashCan from './SVGs/TrashSVG';
import EditSVG from './SVGs/EditSVG';
import handleVisibility from '../utils/handleVisibility';
import DeleteProject from './Modals/DeleteProject';
import EditProject from './Modals/EditProject';

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
  setProjectArr,
}: {
  project: string;
  taskArr: Array<objType>;
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
  projectArr: string[];
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
  setProjectArr: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [deleteProjectVisible, setDeleteProjectVisible] = useState(false);
  const [editProjectVisible, setEditProjectVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const projectFilter = ['project', project];
  return (
    <div>
      <div className="mr-3 grid grid-cols-[1fr_40px_40px]">
        <h3
          className="ml-2 cursor-pointer text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {project}
        </h3>
        <button
          className="justify-self-end"
          onClick={() => {
            handleVisibility.open(setEditProjectVisible);
          }}
        >
          <EditSVG classes="ml-1" />
        </button>
        <button
          className="justify-self-end"
          onClick={() => {
            handleVisibility.open(setDeleteProjectVisible);
          }}
        >
          <TrashCan classes="ml-1" />
        </button>
      </div>
      {isOpen ? (
        <div className="ml-1">
          <TaskList
            tasksArr={taskArr}
            setTaskArr={setTaskArr}
            projectArr={projectArr}
            setFilterRange={setFilterRange}
            taskFilter={projectFilter}
          />
        </div>
      ) : (
        ''
      )}
      {deleteProjectVisible ? (
        <DeleteProject
          setDeleteProjectVisible={setDeleteProjectVisible}
          project={project}
          projectArr={projectArr}
          taskArr={taskArr}
          setTaskArr={setTaskArr}
          setProjectArr={setProjectArr}
        />
      ) : (
        ''
      )}
      {editProjectVisible ? (
        <EditProject
          setProjectArr={setProjectArr}
          setEditProjectVisible={setEditProjectVisible}
          project={project}
          taskArr={taskArr}
          setTaskArr={setTaskArr}
          projectArr={projectArr}
          setFilterRange={setFilterRange}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default ProjectCard;
