import CloseSVG from '../SVGs/CloseSVG';
import handleVisibility from '../../utils/handleVisibility';
import { useRef } from 'react';
import handleProjectChanges from '../../utils/handleProjectChanges';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;
};

function DeleteProject({
  setDeleteProjectVisible,
  project,
  projectArr,
  taskArr,
  setTaskArr,
  setProjectArr,
}: {
  setDeleteProjectVisible: React.Dispatch<React.SetStateAction<boolean>>;
  project: string;
  projectArr: string[];
  taskArr: objType[];
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
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
          handleVisibility.hide(setDeleteProjectVisible);
        }
      }}
    >
      <div className="grid w-72 grid-cols-1 grid-rows-[40px_1fr_50px] bg-white sm:w-2/5 sm:min-w-[400px] sm:grid-rows-[70px_minmax(100px,_1fr)_100px]">
        <div className="grid bg-blue-400">
          <h2 className="col-start-1 row-start-1 ml-2 self-center text-lg font-bold sm:text-3xl">
            Delete Project
          </h2>
          <button
            aria-label="close-delete-task"
            className="z-20 col-start-1 row-start-1 mr-2 mt-2 self-start justify-self-end sm:mr-4 sm:mt-4"
            onClick={() => handleVisibility.hide(setDeleteProjectVisible)}
          >
            <CloseSVG classes="" color="#0f0f0f" width={20} />
          </button>
        </div>
        <p className="z-10 col-start-1 row-start-2 mx-1 mr-2 w-full overflow-hidden text-ellipsis px-1 pt-5 text-center sm:text-xl">
          Are you sure you wish to delete Project: {project} and all tasks
          associated with the project?
        </p>
        <div className="grid grid-cols-2 grid-rows-1 items-center justify-items-center sm:gap-10">
          <button
            className="h-8 w-24 rounded-xl border border-black bg-blue-300 hover:bg-blue-400 active:bg-blue-500 sm:justify-self-end"
            onClick={() => {
              handleProjectChanges.deleteProject(
                project,
                projectArr,
                taskArr,
                setTaskArr,
                setProjectArr,
              );
              handleVisibility.hide(setDeleteProjectVisible);
            }}
          >
            Yes
          </button>
          <button
            className="h-8 w-24 rounded-xl border border-black bg-blue-300 hover:bg-blue-400 active:bg-blue-500 sm:justify-self-start"
            onClick={() => handleVisibility.hide(setDeleteProjectVisible)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProject;
