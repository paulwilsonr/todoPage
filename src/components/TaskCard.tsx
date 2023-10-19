import TrashCan from './SVGs/TrashSVG';
import EditSVG from './SVGs/EditSVG';
import TaskDetails from './Modals/TaskDetails';
import { useState } from 'react';
import handleVisibility from '../utils/handleVisibility';
import DeleteTask from './Modals/DeleteTask';
import EditTask from './Modals/EditTask';
import formatDate from '../utils/formatDate';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
};

function TaskCard({
  task,
  taskArr,
  setTaskArr,
  projectArr,
  setFilterRange,
}: {
  task: objType;
  taskArr: objType[];
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
  projectArr: string[];
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [deleteTaskVisible, setDeleteTaskVisible] = useState(false);
  const [editTaskVisible, setEditTaskVisible] = useState(false);

  let priorityColor = '';
  switch (task.priority) {
    case 'low':
      priorityColor = ' border-l-emerald-500 border-l-8';
      break;
    case 'medium':
      priorityColor = ' border-l-yellow-300 border-l-8';
      break;
    case 'high':
      priorityColor = ' border-l-red-700 border-l-8';
      break;
    default:
      break;
  }

  let taskName = task.name;
  if (taskName.length >= 16 && window.innerWidth < 640) {
    taskName = taskName.slice(0, 12) + '...';
  }

  return (
    <div
      className={
        'mx-2 my-3 flex justify-start border-2 border-black px-1 sm:h-20 sm:items-center' +
        priorityColor
      }
      key={task.id}
    >
      <div className="flex px-1 sm:w-3/4">
        <input
          className="sm:w-10"
          type="checkbox"
          name="taskDone"
          id="taskDone"
        />
        <h2 className="ml-1 sm:ml-4  sm:text-4xl">{taskName}</h2>
      </div>
      <div className="flex sm:mr-5 sm:w-1/4 sm:justify-between">
        <button
          className="mx-1 sm:w-fit sm:text-4xl"
          onClick={() => handleVisibility.open(setDetailsVisible)}
        >
          Details
        </button>
        <p className="ml-1 w-24 sm:w-fit sm:text-4xl">
          {formatDate(task.due, true)}
        </p>
        <button
          onClick={() => {
            handleVisibility.open(setEditTaskVisible);
          }}
        >
          <EditSVG classes="ml-1" />
        </button>
        <button
          onClick={() => {
            handleVisibility.open(setDeleteTaskVisible);
          }}
        >
          <TrashCan classes="ml-1" />
        </button>
      </div>
      {detailsVisible ? (
        <TaskDetails setDetailsVisible={setDetailsVisible} task={task} />
      ) : (
        ''
      )}
      {deleteTaskVisible ? (
        <DeleteTask
          setDeleteTaskVisible={setDeleteTaskVisible}
          task={task}
          taskArr={taskArr}
          setTaskArr={setTaskArr}
        />
      ) : (
        ''
      )}
      {editTaskVisible ? (
        <EditTask
          setEditTaskVisible={setEditTaskVisible}
          task={task}
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

export default TaskCard;
