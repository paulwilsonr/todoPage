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
}: {
  tasksArr: Array<objType>;
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
  projectArr: string[];
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const sortedTaskArr = sortTasks(tasksArr);

  return (
    <div>
      {sortedTaskArr.map(task => {
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
      })}
    </div>
  );
}

export default TaskList;
