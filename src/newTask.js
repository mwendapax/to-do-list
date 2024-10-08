import {mkElem,mkElemC,mkElemD,appendMultip, mkProjectAppend} from './fn.js';
import { category } from './mklist.js';

const task = (function () {
    const newTask = mkElemC('div', 'new-task');

    const form = mkElem('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'post');

    const taskInputHead = mkElemC('div', 'task-input-head');

    const title = mkElemD('input','title');
    title.setAttribute('type', 'text');
    title.setAttribute('name','title');
    title.setAttribute('placeholder', 'Input task title here');

    const textArea = mkElemD('textarea','description');
    textArea.setAttribute('name', 'description');
    textArea.setAttribute('placeholder', 'Enter task description here');

    appendMultip(taskInputHead, title, textArea);

    const inputDateCategory = mkElemC('div','input-date-category');

    const dateSection = mkElemC('div', 'date-section');
    const dateSectionLabel = mkElem('label');
    dateSectionLabel.setAttribute('for','due_date');
    dateSectionLabel.textContent = 'Due date';

    const dateSectionInput = mkElemD('input', 'due_date');
    dateSectionInput.setAttribute('type', 'date');
    dateSectionInput.setAttribute('name','due_date');

    appendMultip(dateSection,dateSectionLabel,dateSectionInput);

    const prioritySection = mkElemC('div','priority-section');
    const prioritySectionLabel = mkElem('label');
    prioritySectionLabel.setAttribute('for', 'priority');
    prioritySectionLabel.textContent = 'Priority';

    const prioritySectionInput = mkElemD('input', 'range');
    prioritySectionInput.setAttribute('type','range');
    prioritySectionInput.setAttribute('value','3');
    prioritySectionInput.setAttribute('min','1');
    prioritySectionInput.setAttribute('max','10');

    appendMultip(prioritySection,prioritySectionLabel,prioritySectionInput);

    const categorySection = mkElemC('div', 'category-section');
    const categorySectionLabel = mkElem('label');
    categorySectionLabel.setAttribute('for','category');
    categorySectionLabel.textContent = 'Category:';

    const select = mkElemD('select','category');
    select.setAttribute('name', 'category');

    mkProjectAppend(select, category.projects);

    appendMultip(categorySection,categorySectionLabel,select);

    appendMultip(inputDateCategory,dateSection,prioritySection,categorySection);

    const addTask = mkElemC('div','add-task');
    addTask.textContent = '+';

    appendMultip(form,taskInputHead,inputDateCategory,addTask);
    appendMultip(newTask,form);

    return {newTask, addTask};
})();

export {task};