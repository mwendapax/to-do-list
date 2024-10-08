import './styles.css';
import { mainUI } from './mainDOM.js';
import { appendMultip } from './fn.js';
import {task} from './newTask.js';


(function addToDOM () {
    const content = document.querySelector('#content');

    mainUI.newList.addEventListener('click', () => {
        content.appendChild(task.newTask);
        content.removeChild(mainUI.newList);

    });

    appendMultip(content, mainUI.header, mainUI.lists, mainUI.newList);
})();