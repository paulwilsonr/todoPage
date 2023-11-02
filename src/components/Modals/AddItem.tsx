import CloseSVG from '../SVGs/CloseSVG';
import handleVisibility from '../../utils/handleVisibility';
import { useRef, useState } from 'react';
import AddTaskForm from '../AddTaskForm';
import AddProjectForm from '../AddProjectForm';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;
};

function AddItem({
  setAddItemVisible,
  currentTask,
  taskArr,
  setTaskArr,
  projectArr,
  setProjectArr,
  setFilterRange,
}: {
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>;
  currentTask: objType;
  taskArr: objType[];
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
  projectArr: string[];
  setProjectArr: React.Dispatch<React.SetStateAction<string[]>>;
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const ref = useRef(null);
  const [formChoice, setFormChoice] = useState('task');

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-20 flex h-full w-full items-center justify-center bg-greyedOut"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== ref.current) {
          return null;
        } else {
          handleVisibility.hide(setAddItemVisible);
        }
      }}
    >
      <div className="grid w-80 grid-cols-[80px_1fr] grid-rows-[50px_1fr] bg-white sm:w-2/5 sm:grid-cols-[240px_1fr] sm:grid-rows-[70px_minmax(250px,_1fr)]">
        <h2 className="col-span-full row-start-1 h-full bg-blue-400 pl-2 pt-3 font-bold sm:pl-5 sm:text-3xl">
          Create New...
        </h2>
        <button
          aria-label="close-add-item"
          className="col-start-2 row-start-1 mr-2 mt-2 self-start justify-self-end sm:mr-4 sm:mt-4"
          onClick={() => handleVisibility.hide(setAddItemVisible)}
        >
          <CloseSVG classes="" color="#0f0f0f" width={20} />
        </button>
        <ul className="font-semibold sm:text-xl">
          <li
            className={
              formChoice === 'task'
                ? 'mt-1 h-6 w-3/4 cursor-pointer border-b-4 border-blue-400 sm:h-10'
                : 'mt-1 h-6 cursor-pointer sm:h-10'
            }
            onClick={() => setFormChoice('task')}
          >
            To Do
          </li>
          <li
            className={
              formChoice === 'project'
                ? 'mt-1 h-6 w-3/4 cursor-pointer border-b-4 border-blue-400 sm:h-10'
                : 'mt-1 h-6 cursor-pointer sm:h-10'
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
            currentProject=""
            projectArr={projectArr}
            setProjectArr={setProjectArr}
            setAddItemVisible={setAddItemVisible}
            setFilterRange={setFilterRange}
            newProject={true}
            taskArr={taskArr}
            setTaskArr={setTaskArr}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default AddItem;
