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
      className="absolute inset-0 z-20 flex h-full w-full items-center justify-center bg-greyedOut"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== ref.current) {
          return null;
        } else {
          handleVisibility.hide(setDetailsVisible);
        }
      }}
    >
      <div className="grid w-72  grid-rows-[40px_30px_minmax(30px,_50%)_30px_minmax(50px,_50%)] gap-2 bg-white sm:w-2/5 sm:min-w-[400px] sm:grid-rows-[70px_60px_minmax(60px,_1fr)_minmax(100px,_50%)] sm:gap-4">
        <div className="col-span-full grid bg-blue-400">
          <h2 className="col-start-1 row-start-1 ml-2 self-center truncate text-lg font-bold sm:pl-4 sm:text-3xl">
            {task.name}
          </h2>
          <button
            aria-label="close-details"
            className="col-start-2 row-start-1 mr-2 mt-2 self-start justify-self-end sm:mr-4 sm:mt-4"
            onClick={() => handleVisibility.hide(setDetailsVisible)}
          >
            <CloseSVG classes="" color="#0f0f0f" width={20} />
          </button>
        </div>
        <p className="col-span-full ml-2 sm:ml-4 sm:text-3xl">
          <span className="font-semibold">Due: </span>
          {formatDate(task.due, false)}
        </p>
        {task.project === 'none' ? (
          ''
        ) : (
          <p className="col-start-1 ml-2 sm:ml-4 sm:mt-4 sm:text-3xl">
            <span className="font-semibold">Project: </span>
            {task.project}
          </p>
        )}
        {task.priority === '' ? (
          ''
        ) : (
          <p className="ml-2 sm:ml-4 sm:mt-4 sm:text-3xl">
            <span className="font-semibold">Priority: </span>
            {task.priority}
          </p>
        )}

        <p className="col-span-full mb-2 px-2 sm:mb-8 sm:ml-4 sm:mt-4 sm:text-3xl">
          <span className="font-semibold">Details: </span>
          {task.details}
        </p>
      </div>
    </div>
  );
}

export default TaskDetails;
