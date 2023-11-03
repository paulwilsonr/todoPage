import filterTasks from '../utils/filterTasks';
import sortTasks from '../utils/sortTasks';
import TaskCard from './TaskCard';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;
};
function TaskList({
  tasksArr,
  setTaskArr,
  projectArr,
  setFilterRange,
  taskFilter,
}: {
  tasksArr: Array<objType>;
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
  projectArr: string[];
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
  taskFilter: string[];
}) {
  const sortedTaskArr = sortTasks(filterTasks(tasksArr, taskFilter));

  return (
    <div>
      {sortedTaskArr.length === 0 || sortedTaskArr[0].id === '' ? (
        <p className="my-2 ml-4 sm:text-2xl">No Tasks</p>
      ) : (
        sortedTaskArr.map(task => {
          if (task) {
            if (task.id === '') {
              return '';
            }
            return (
              <TaskCard
                key={task.id}
                task={task}
                taskArr={tasksArr}
                setTaskArr={setTaskArr}
                projectArr={projectArr}
                setFilterRange={setFilterRange}
              />
            );
          }
        })
      )}
    </div>
  );
}

export default TaskList;
