import { cardControler } from "./taskDisplayControler";
//import { taskControler } from "./taskController";
import { toggleHidden } from "./index";
import { listControler } from "./listController";
import { projectController } from "./projectController";
import { toggleSideMenu } from "./index";
import { format } from "date-fns";

export const projectDisplayController = {
    createProjectSideMenuCard (projectCardInfo) {
        const newProjectCard = document.createElement('div');
        newProjectCard.setAttribute('id', projectCardInfo.key);
        newProjectCard.setAttribute('class', 'sideMenuOption projectCard');
        
        const newTitle = document.createElement('p');
        newTitle.setAttribute('class','sideMenuProjectTitle pointer');
        newTitle.innerText = projectCardInfo.title;
        newProjectCard.appendChild(newTitle);

        const newDate = document.createElement('p');
        newDate.setAttribute('class', 'sideMenuProjectDate');
        newDate.innerText = format(new Date(projectCardInfo.date), 'MMM-d');
        newProjectCard.appendChild(newDate);

        const taskIcon = document.createElement('img');
        taskIcon.setAttribute('class', 'smallIcon sideMenuAddProjectTask pointer');
        taskIcon.setAttribute('src', '../src/assets/more.png');
        taskIcon.setAttribute('alt', 'Add new task to this project');
        newProjectCard.appendChild(taskIcon);

        const newDesc = document.createElement('p');
        newDesc.setAttribute('class', 'sideMenuProjectDescription');
        newDesc.innerText = projectCardInfo.description;
        newProjectCard.appendChild(newDesc);

        const newEdit = document.createElement('p');
        newEdit.setAttribute('class','sideMenuEdit pointer');
        newEdit.innerText = 'edit';
        newProjectCard.appendChild(newEdit);

        const newDelete = document.createElement('p');
        newDelete.setAttribute('class', 'sideMenuDelete pointer');
        newDelete.innerText = 'delete';
        newProjectCard.appendChild(newDelete);

        document.querySelector('.projectSorterContainer').appendChild(newProjectCard);
    },
    clearProjectsDisplay () {
        const projectsDisplayNL = document.querySelectorAll('.projectCard');
        projectsDisplayNL.forEach((item) => {
            item.remove();
        })
    },
    deleteProject(button) {
        const projectCard = button.parentElement;
        const projectArr = JSON.parse(localStorage.getItem('projects'));
        for(let i=0; i < projectArr.length; i++) {
            if(projectArr[i].key == projectCard.id) {
                projectArr.splice(i, 1);
            }
        }
        localStorage.setItem('projects', JSON.stringify(projectArr));
        projectCard.remove();
    },
    getProjectFromStorage (projectId) {
        const projectArr = JSON.parse(localStorage.getItem('projects'));
        for(let i=0; i < projectArr.length; i++) {
            if(projectArr[i].key == projectId) {
                return projectArr[i];
            }
        } 
    },
    projectTaskDisplay(newTitle, projectId) {
        const title = document.querySelector('#mainTitle');
        title.innerText = newTitle;
        const projectArr = projectDisplayController.getProjectFromStorage(projectId);
        cardControler.displayTasks(projectArr.taskArr, 'project', projectArr.key)
    },
    changeTaskMenu (button) {
        const title = button.parentElement.firstChild.innerText;
        document.querySelector('.menuHeaderText').innerHTML = `Create New Task for <br> ${title}`;
        const projectId = button.parentElement.id;
        document.querySelector('.submitButton').setAttribute('id', projectId);
    },
    displayProjects () {
        projectDisplayController.clearProjectsDisplay();
        const projectArr = JSON.parse(localStorage.getItem('projects'));
        for(let i = 0; i < projectArr.length; i++) {
            projectDisplayController.createProjectSideMenuCard(projectArr[i]);
        };
        document.querySelectorAll('.sideMenuDelete').forEach(item => {
            item.addEventListener('click', event => {
                this.deleteProject(item);
                listControler.dueDateArrMaker('all');
            })
        })
        document.querySelectorAll('.sideMenuProjectTitle').forEach(item => {
            item.addEventListener('click', event => {
                const projectId = item.parentElement.id;
                projectDisplayController.projectTaskDisplay(item.innerText, projectId);
            })
        })
        document.querySelectorAll('.sideMenuAddProjectTask').forEach(item => {
            item.addEventListener('click', event => {
                projectDisplayController.changeTaskMenu(item);
                toggleHidden(document.querySelector('#newTask'));
            })
        });
        document.querySelectorAll('.sideMenuEdit').forEach(item => {
            item.addEventListener('click', event => {
                const projectId = item.parentElement.id;
                projectController.editProjectMaker(projectId);
                toggleHidden(document.querySelector('#editProject'))
                toggleSideMenu();
            })
        })

    }
}