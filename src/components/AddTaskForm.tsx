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

  useAutosizeTextArea(textAreaRef.current, task.details);

  return (
    <div className="w-[250px] bg-white">
      <label className="mt-2 flex">
        Title:
        <input
          className="ml-1"
          type="text"
          id="taskTitle"
          placeholder="Pay bills"
          value={task.name}
          onChange={e =>
            formFunctions.changeTaskData('name', e.target.value, task, setTask)
          }
        ></input>
      </label>
      <label className="mt-2 flex">
        Details:
        <textarea
          ref={textAreaRef}
          className="ml-1 h-6 w-[185px]"
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
      <label className="my-2 flex">
        Due Date:
        <input
          className="ml-1"
          type="date"
          id="taskDate"
          placeholder="MM/DD/YYYY"
          value={task.due}
          onChange={e => {
            formFunctions.changeTaskData('due', e.target.value, task, setTask);
          }}
        ></input>
      </label>
      <label>
        Priority:
        <label
          className={
            priorityChoice === 'low'
              ? 'ml-2 rounded-md border border-black bg-blue-400 px-1 py-0.5'
              : 'ml-2 rounded-md border border-black px-1 py-0.5 '
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
              ? 'ml-2 rounded-md border border-black bg-blue-400 px-1 py-0.5'
              : 'ml-2 rounded-md border border-black px-1 py-0.5 '
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
              ? 'ml-2 rounded-md border border-black bg-blue-400 px-1 py-0.5'
              : 'ml-2 rounded-md border border-black px-1 py-0.5 '
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
      <div className="mt-3 flex justify-between pr-1">
        <label>
          Project:
          <select
            className="ml-1"
            id="taskProject"
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
              let projectName = project;
              if (projectName.length >= 12) {
                projectName = projectName.slice(0, 9) + '...';
              }
              return (
                <option key={index} value={project}>
                  {projectName}
                </option>
              );
            })}
          </select>
        </label>
        <button
          type="button"
          className="mb-3 h-6 self-end whitespace-nowrap rounded-md border border-black bg-blue-400 px-2 text-sm"
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
