import CloseSVG from '../SVGs/CloseSVG';
import handleVisibility from '../../utils/handleVisibility';
import { useRef } from 'react';
import formatDate from '../../utils/formatDate';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;
};

function TaskDetails({
  setDetailsVisible,
  task,
}: {
  setDetailsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  task: objType;
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
          handleVisibility.hide(setDetailsVisible);
        }
      }}
    >
      <div className="grid w-72 grid-cols-2 grid-rows-[50px_30px_minmax(30px,_50px)_minmax(50px,_1fr)] bg-white pl-2">
        <p className="col-span-full row-start-1 pt-2 text-2xl font-bold">
          {task.name}
        </p>
        <button
          aria-label="close-details"
          className="col-start-2 row-start-1 mr-2 justify-self-end"
          onClick={() => handleVisibility.hide(setDetailsVisible)}
        >
          <CloseSVG classes="" color="#0f0f0f" width={20} />
        </button>
        <p className="col-span-full">Due: {formatDate(task.due, false)}</p>
        {task.project === 'none' ? (
          ''
        ) : (
          <p className="col-start-1">Project: {task.project}</p>
        )}
        {task.priority === '' ? (
          ''
        ) : (
          <p className="col-start-2">Priority: {task.priority}</p>
        )}

        <p className="col-span-full mb-2">Details: {task.details}</p>
      </div>
    </div>
  );
}

export default TaskDetails;
