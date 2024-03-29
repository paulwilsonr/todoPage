import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isBetween from 'dayjs/plugin/isBetween'
dayjs().format()
dayjs.extend(dayOfYear)
dayjs.extend(isLeapYear)
dayjs.extend(isBetween)

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;

};


function filterTasks(taskArr: objType[], range: string[]) {
  let dateRange = dayjs();
  let topDateRange = dayjs();
  switch (range[0]) {
    case 'all':
      return taskArr;
      break;
    case 'today':
      return taskArr.filter(task => {
        if (!task.completed) {
          const taskDate = dayjs(task.due);
          return taskDate.isSame(dateRange, 'day')
        }
        return false;
      });
      break;
    case 'tomorrow':
      dateRange = dateRange.add(1, 'day')
      return taskArr.filter(task => {
        if (!task.completed) {
          const taskDate = dayjs(task.due);
          return taskDate.isSame(dateRange, 'day')

        }
        return false;
      }
      );
      break;
    case 'week':
      topDateRange = dateRange.add(7, 'day')
      return taskArr.filter(task => {
        const taskDate = dayjs(task.due);
        if (!task.completed) {
          return taskDate.isBetween(dateRange.startOf('day'), topDateRange.endOf('day'), 'day', '[)')
        }
        return false;
      });
      break;
    case 'past':
      return taskArr.filter(task => {
        const taskDate = dayjs(task.due);
        if (!task.completed) {
          return taskDate.isBefore(dateRange, 'day');
        }
        return false;
      })
      break;
    case 'completed':
      return taskArr.filter(task => {
        if (task.completed) {
          return true;
        }
        return false;
      })

      break;
    case 'project':
      return taskArr.filter(task => {
        return task.project === range[1];
      });
      break;
    default:
      return taskArr;
      break;
  }
  return taskArr;
}

export default filterTasks;
