import { cardControler } from "./taskDisplayControler";

export const projectDisplayController = {
    createProjectSideMenuCard (projectCardInfo) {
        const newProjectCard = document.createElement('div');
        newProjectCard.setAttribute('id', projectCardInfo.key);
        newProjectCard.setAttribute('class', 'sideMenuOption projectCard');
        
        const newTitle = document.createElement('p');
        newTitle.setAttribute('class','sideMenuProjectTitle pointer');
        newTitle.innerText = projectCardInfo.title;
        newProjectCard.appendChild(newTitle);

        const taskIcon = document.createElement('img');
        taskIcon.setAttribute('class', 'smallIcon sideMenuAddProjectTask pointer');
        taskIcon.setAttribute('src', '../src/assets/more.png');
        taskIcon.setAttribute('alt', 'Add new task to this project');
        newProjectCard.appendChild(taskIcon);

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
    titleChanger(newTitle) {
        const title = document.querySelector('#mainTitle');
        title.innerText = newTitle;
    },
    displayProjects () {
        projectDisplayController.clearProjectsDisplay();
        const projectArr = JSON.parse(localStorage.getItem('projects'));
        for(let i = 0; i < projectArr.length; i++) {
            projectDisplayController.createProjectSideMenuCard(projectArr[i]);
        };
        document.querySelectorAll('.sideMenuDelete').forEach(item => {
            item.addEventListener('click', event => {
                this.deleteProject(item)
            })
        })
        document.querySelectorAll('.sideMenuProjectTitle').forEach(item => {
            item.addEventListener('click', event => {
                cardControler.titleChanger(item.innerText);
            })
        })
    }
}