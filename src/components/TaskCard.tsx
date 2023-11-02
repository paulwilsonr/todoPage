import TrashCan from './SVGs/TrashSVG';
import EditSVG from './SVGs/EditSVG';
import TaskDetails from './Modals/TaskDetails';
import { useState } from 'react';
import handleVisibility from '../utils/handleVisibility';
import DeleteTask from './Modals/DeleteTask';
import EditTask from './Modals/EditTask';
import formatDate from '../utils/formatDate';
import formFunctions from '../utils/formFunctions';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;
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
      priorityColor = ' pl-3';
      break;
  }

  return (
    <div
      className={
        'mx-2 my-2 grid grid-cols-[1fr_210px] justify-between border-2 border-black bg-white px-1 sm:h-12 sm:grid-cols-[minmax(250px,_3fr)_minmax(300px,_1fr)] sm:items-center sm:justify-start' +
        priorityColor
      }
      key={task.id}
    >
      <div className="grid grid-cols-[20px_1fr] gap-2 px-1 sm:w-full">
        <input
          className="w-4 sm:w-6"
          type="checkbox"
          name="taskDone"
          id="taskDone"
          onChange={() =>
            formFunctions.changedChecked(
              task,
              taskArr,
              setTaskArr,
              !task.completed,
            )
          }
          checked={task.completed}
        />
        <h2 className="ml-1 w-11/12 truncate sm:ml-4 sm:text-2xl">
          {task.name}
        </h2>
      </div>
      <div className="flex sm:mr-5 sm:grid sm:w-1/4 sm:min-w-full sm:grid-cols-[minmax(80px,_2fr)_minmax(150px,_3fr)_minmax(40px,_1fr)_minmax(40px,_1fr)] sm:justify-between">
        <button
          className="mx-1 sm:w-fit sm:text-2xl"
          onClick={() => handleVisibility.open(setDetailsVisible)}
        >
          Details
        </button>
        <p className="ml-1 w-24 sm:w-fit sm:whitespace-nowrap sm:text-2xl">
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
