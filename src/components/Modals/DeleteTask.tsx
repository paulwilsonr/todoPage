import CloseSVG from '../SVGs/CloseSVG';
import handleVisibility from '../../utils/handleVisibility';
import { useRef } from 'react';
import handleTaskChanges from '../../utils/handleTaskChanges';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;
};

function DeleteTask({
  setDeleteTaskVisible,
  task,
  taskArr,
  setTaskArr,
}: {
  setDeleteTaskVisible: React.Dispatch<React.SetStateAction<boolean>>;
  task: objType;
  taskArr: objType[];
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
}) {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex h-full w-full items-center justify-center bg-greyedOut"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== ref.current) {
          return null;
        } else {
          handleVisibility.hide(setDeleteTaskVisible);
        }
      }}
    >
      <div className="grid w-72 grid-cols-1 grid-rows-2 bg-white pl-2">
        <button
          aria-label="close-delete-task"
          className="z-20 col-start-1 row-start-1 mr-2 mt-2 self-start justify-self-end"
          onClick={() => handleVisibility.hide(setDeleteTaskVisible)}
        >
          <CloseSVG classes="" color="#0f0f0f" width={20} />
        </button>
        <p className="z-10 col-start-1 row-start-1 mr-2 pt-5 text-center">
          Are you sure you wish to delete {task.name} task?
        </p>
        <div className="grid grid-cols-2 grid-rows-1">
          <button
            onClick={() => {
              handleTaskChanges.deleteTask(task, taskArr, setTaskArr);
              handleVisibility.hide(setDeleteTaskVisible);
            }}
          >
            Yes
          </button>
          <button onClick={() => handleVisibility.hide(setDeleteTaskVisible)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteTask;
