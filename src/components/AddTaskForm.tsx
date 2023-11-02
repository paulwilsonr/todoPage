import { useRef, useState } from 'react';
import handleVisibility from '../utils/handleVisibility';
import useAutosizeTextArea from '../utils/useAutosizeTextArea';
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

function AddTaskForm({
  currentTask,
  taskArr,
  setTaskArr,
  setAddItemVisible,
  projectArr,
  newTask,
  setFilterRange,
}: {
  currentTask: objType;
  taskArr: objType[];
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>;
  projectArr: string[];
  newTask: boolean;
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [priorityChoice, setPriorityChoice] = useState(currentTask.priority);
  const [task, setTask] = useState(currentTask);
  let formWidth = '';

  useAutosizeTextArea(textAreaRef.current, task.details);

  if (newTask) {
    formWidth = ' w-[250px]';
  } else {
    formWidth = ' w-[300px]';
  }

  return (
    <div className={'bg-white sm:w-11/12 sm:text-xl' + formWidth}>
      <label className="mt-2 flex font-semibold sm:my-4">
        Title:
        <input
          className="ml-1 font-medium sm:w-4/5"
          type="text"
          id="taskTitle"
          placeholder="Pay bills"
          value={task.name}
          onChange={e =>
            formFunctions.changeTaskData('name', e.target.value, task, setTask)
          }
        ></input>
      </label>
      <label className="mt-2 flex font-semibold sm:mb-4">
        Details:
        <textarea
          ref={textAreaRef}
          className="ml-1 h-6 w-[185px] font-medium sm:w-4/5"
          id="taskDetails"
          placeholder="eg. internet, phone, rent"
          value={task.details}
          onChange={e =>
            formFunctions.changeTaskData(
              'details',
              e.target.value,
              task,
              setTask,
            )
          }
        ></textarea>
      </label>
      <label className="my-2 flex font-semibold sm:mb-4">
        Due Date:
        <input
          className="ml-1 font-medium"
          type="date"
          id="taskDate"
          placeholder="MM/DD/YYYY"
          value={task.due}
          onChange={e => {
            formFunctions.changeTaskData('due', e.target.value, task, setTask);
          }}
        ></input>
      </label>
      <label className="font-semibold">
        Priority:
        <label
          className={
            priorityChoice === 'low'
              ? 'ml-2 rounded-md border border-black bg-blue-400 px-1 py-0.5 font-medium sm:mx-6'
              : 'ml-2 rounded-md border border-black px-1 py-0.5 font-medium sm:mx-6 '
          }
        >
          Low
          <input
            onClick={() => {
              formFunctions.changePriority('low', setPriorityChoice);
              formFunctions.changeTaskData('priority', 'low', task, setTask);
            }}
            className="appearance-none"
            type="radio"
            id="lowPriority"
            name="taskPriority"
            value="low"
          ></input>
        </label>
        <label
          className={
            priorityChoice === 'medium'
              ? 'ml-2 rounded-md border border-black bg-blue-400 px-1 py-0.5 font-medium sm:mr-6'
              : 'ml-2 rounded-md border border-black px-1 py-0.5 font-medium sm:mr-6 '
          }
        >
          Medium
          <input
            onClick={() => {
              formFunctions.changePriority('medium', setPriorityChoice);
              formFunctions.changeTaskData('priority', 'medium', task, setTask);
            }}
            className="appearance-none bg-black hover:bg-blue-400"
            type="radio"
            id="mediumPriority"
            name="taskPriority"
            value="medium"
          ></input>
        </label>
        <label
          className={
            priorityChoice === 'high'
              ? 'ml-2 rounded-md border border-black bg-blue-400 px-1 py-0.5 font-medium'
              : 'ml-2 rounded-md border border-black px-1 py-0.5 font-medium '
          }
        >
          High
          <input
            onClick={() => {
              formFunctions.changePriority('high', setPriorityChoice);
              formFunctions.changeTaskData('priority', 'high', task, setTask);
            }}
            className="appearance-none bg-black hover:bg-blue-400"
            type="radio"
            id="highPriority"
            name="taskPriority"
            value="high"
          ></input>
        </label>
      </label>
      <div className="mt-3 flex justify-between pr-1 font-semibold sm:mt-5">
        <label>
          Project:
          <select
            className="ml-1 w-[115px] truncate font-medium sm:w-fit sm:max-w-xs"
            id="taskProject"
            value={task.project}
            onChange={e =>
              formFunctions.changeTaskData(
                'project',
                e.target.value,
                task,
                setTask,
              )
            }
          >
            <option value="none">None</option>
            {projectArr.map((project, index) => {
              if (project === '') {
                return;
              }
              return (
                <option key={index} value={project}>
                  {project}
                </option>
              );
            })}
          </select>
        </label>
        <button
          type="button"
          className="mb-3 h-6 self-end whitespace-nowrap rounded-md border border-black bg-blue-300 px-2 text-sm hover:bg-blue-400 active:bg-blue-500 sm:h-9 sm:w-28 sm:rounded-xl sm:text-xl"
          onClick={() => {
            formFunctions.handleSubmit(
              newTask,
              task,
              taskArr,
              setTaskArr,
              currentTask,
              setFilterRange,
            );
            handleVisibility.hide(setAddItemVisible);
          }}
        >
          {newTask ? 'Create' : 'Update'}
        </button>
      </div>
    </div>
  );
}

export default AddTaskForm;
