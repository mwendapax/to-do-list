import './styles.css';
import { addCategory } from './localStorage.js';
import { appendMultip} from './fn.js';
import { mainUI } from './mainDOM.js';
import {task} from './newTask.js';
import { list } from './list.js';
import { lists } from './addList.js';
import { addListToDOM } from './addToDom.js';
import { extraCard } from './extraCard.js';



(function addToDOM () {
    const content = document.querySelector('#content');
    content.appendChild(extraCard);
    addCategory();

    mainUI.newList.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        task.title.value = '';
        task.textArea.value = '';
        task.dateSectionInput.value = '';
        content.appendChild(task.newTask);
        content.addEventListener('click', () => {
            location.reload();
        });
        content.removeChild(mainUI.newList);
    });



    appendMultip(content, mainUI.header, mainUI.lists, mainUI.newList);
})();


(function addTask () {
    addListToDOM();
    task.newTask.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
    });

    task.addTask.addEventListener('click',() => {
      
        if(task.title.value.length !== 0 && task.select.value.length !== 0 && task.dateSectionInput.value.length !== 0) {
            let newList  = new list.NewList(task.title.value, task.textArea.value, task.dateSectionInput.value, task.prioritySectionInput.value,task.select.value);
            lists.push(newList);
            content.removeChild(task.newTask);
            content.appendChild(mainUI.newList);
            localStorage.setItem('lists', JSON.stringify(lists));
            location.reload();
        }
    
    })
})();

(function chooseCategory () {
        const projects = document.querySelector('.projects');
        const projectsItems = projects.querySelectorAll('div');

        for (let item of projectsItems) {
            if (item != projectsItems[projectsItems.length -1]) {
                item.addEventListener('click',(e) => {
                    for(item of projectsItems) {
                        if(item != projectsItems[projectsItems.length -1] ) {
                            item.style.backgroundColor = 'white';
                            item.style.color = 'black';
                        }
                        e.target.style.background = '#35CB8B';
                        e.target.style.color = 'white';
                    }
                })
            }
        }

        mainUI.projectDiv.click();
})();