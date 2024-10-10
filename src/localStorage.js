import {category} from './mklist.js';
import { mainUI } from './mainDOM.js';

let project = category.projects;


    function addNewProj (...args){
        for (let item of args) {
            item.addEventListener('click', () => {
                let newProp = prompt('Enter new category');

                if (newProp != undefined) {
                    project.splice(-1,0,newProp);
                    localStorage.setItem('category', JSON.stringify(project));
                    location.reload();
                }
            });
        }
    };


    (function () {
    localStorage.setItem('category',JSON.stringify(category.projects));
    })();

    function addCategory () {
        const projItems = mainUI.projects.querySelectorAll('div');
        const lastProjDiv = projItems[projItems.length -1];
        
        addNewProj(lastProjDiv);    
        
    };


export {addCategory};