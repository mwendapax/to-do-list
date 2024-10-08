import { mkElem, mkElemC, mkElemD, mkDivElemAppend } from "./fn.js";

const mainUI = (function (){

    const header = mkElem('header');
    const nav = mkElem('nav');

    const logo = mkElemC('div', 'logo');
    logo.textContent = 'To do list';

    const projects = mkElemC('div', 'projects');
    const projectDiv = mkElem('div');
    projectDiv.textContent = 'All';

    projects.appendChild(projectDiv);

    
    let items = JSON.parse(localStorage.getItem('category'));

    mkDivElemAppend(projects, items);


    nav.appendChild(logo);
    nav.appendChild(projects);
    header.appendChild(nav);


    const lists = mkElemD('div', 'lists');

    const newList = mkElemC('div', 'new-list');
    newList.setAttribute('title','Add a new todo');
    newList.textContent = "+";

    return {header, lists, newList,projects};

})();


export {mainUI};