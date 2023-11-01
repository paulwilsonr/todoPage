import * as dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isBetween from 'dayjs/plugin/isBetween'
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

        const taskDate = dayjs(task.due);
        return taskDate.isSame(dateRange, 'day')
        //   let withinRange:boolean = false;
        // const taskDate = new Date(task.due.replace(/-/g, '/'));
        // console.log('task time ' +taskDate.getTime())
        // console.log('date time ' +dateRange.getTime())
        // if(dateRange.getTime() === taskDate.getTime()
        // ) {
        //   withinRange = true;
        // } 
        // return withinRange;
      });
      break;
    case 'tomorrow':
      dateRange = dateRange.add(1, 'day')

      return taskArr.filter(task => {
        const taskDate = dayjs(task.due);
        return taskDate.isSame(dateRange, 'day')

      }
      );
      break;
    case 'week':
      topDateRange = dateRange.add(7, 'day')
      return taskArr.filter(task => {
        const taskDate = dayjs(task.due);
        return taskDate.isBetween(dateRange.startOf('day'), topDateRange.endOf('day'), 'day', '[)')
      });
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
