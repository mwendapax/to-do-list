import { mkElem, mkElemC, mkElemD, mkDivElemAppend } from "./fn.js";
import { addListToDOM } from "./addToDom.js";
const mainUI = (function (){

    const header = mkElem('header');
    const nav = mkElem('nav');

    const logo = mkElemC('div', 'logo');
    logo.textContent = 'Minimal list';

    const projects = mkElemC('div', 'projects');
    const projectDiv = mkElem('div');
    projectDiv.textContent = 'All';


    projectDiv.addEventListener('click', () => {
        addListToDOM();
    });

    projects.appendChild(projectDiv);

    
    let items = JSON.parse(localStorage.getItem('category'));
    console.log('categories', items);

    mkDivElemAppend(projects, items);


    nav.appendChild(logo);
    nav.appendChild(projects);
    header.appendChild(nav);


    const lists = mkElemD('div', 'lists');

    const newList = mkElemC('div', 'new-list');
    newList.setAttribute('title','Add a new todo');
    newList.textContent = "+";

    return {header, lists, newList,projects,projectDiv};

})();


export {mainUI};