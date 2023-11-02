import CloseSVG from '../SVGs/CloseSVG';
import handleVisibility from '../../utils/handleVisibility';
import { useRef } from 'react';
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

function EditProject({
  setEditProjectVisible,
  project,
  taskArr,
  setTaskArr,
  projectArr,
  setFilterRange,
  setProjectArr,
}: {
  setEditProjectVisible: React.Dispatch<React.SetStateAction<boolean>>;
  project: string;
  taskArr: objType[];
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
  projectArr: string[];
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
  setProjectArr: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-20 flex h-full w-full items-center justify-center bg-greyedOut"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== ref.current) {
          return null;
        } else {
          handleVisibility.hide(setEditProjectVisible);
        }
      }}
    >
      <div className="grid w-80 grid-rows-[50px_1fr] bg-white sm:h-1/4 sm:w-2/5 sm:grid-rows-[70px_1fr]">
        <h2 className="col-span-full row-start-1 h-full bg-blue-400 pl-2 pt-3 font-bold sm:pl-4 sm:text-3xl">
          Edit Project
        </h2>
        <button
          aria-label="close-add-item"
          className="col-start-1 row-start-1 mr-2 mt-2 self-start justify-self-end sm:mr-4 sm:mt-4"
          onClick={() => handleVisibility.hide(setEditProjectVisible)}
        >
          <CloseSVG classes="" color="#0f0f0f" width={20} />
        </button>
        <div className="ml-2 sm:flex sm:justify-center">
          <AddProjectForm
            currentProject={project}
            projectArr={projectArr}
            setProjectArr={setProjectArr}
            setAddItemVisible={setEditProjectVisible}
            setFilterRange={setFilterRange}
            newProject={false}
            taskArr={taskArr}
            setTaskArr={setTaskArr}
          />
        </div>
      </div>
    </div>
  );
}

export default EditProject;
