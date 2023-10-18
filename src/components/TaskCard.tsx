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

  return (
    <div
      className="flex justify-between px-1 mx-2 border-black border-2"
      key={task.id}
    >
      <div className="flex px-1">
        <input type="checkbox" name="taskDone" id="taskDone" />
        <h2 className="ml-1">{task.name}</h2>
      </div>
      <div className="flex">
        <button
          className="mx-1"
          onClick={() => handleVisibility.open(setDetailsVisible)}
        >
          Details
        </button>
        <p className="ml-1 w-24">{formatDate(task.due, true)}</p>
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
