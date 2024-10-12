import {mkElem,mkElemC, appendMultip,mkElemD} from './fn.js';

const listCard = function (obj) {

    const list = mkElemC('div','list');

    const listLabel = document.createElement('label');
    const listLabelDiv = document.createElement('div');

    const status = document.createElement('input');
    status.setAttribute('type','checkbox');
    status.setAttribute('name','status');
    status.setAttribute('id','status');

    listLabelDiv.appendChild(status);

    appendMultip(listLabelDiv,status);

    const listDiv = document.createElement('div');
    listDiv.classList.add('list-div');

    const listItem = document.createElement('div');
    listItem.classList.add('list-item');

    const listItemTitle = document.createElement('p');
    listItemTitle.textContent = obj.title;

    const listItemDate = document.createElement('p');
    listItemDate.textContent = obj.dueDate;

    const listPriority = obj.priority;
    console.log(listPriority)

    if (listPriority <= 3) {
        console.log(listPriority);
        list.style.border = '1px solid #F89F0D';
    }else if (listPriority >3 && listPriority <= 6) {
        list.style.border = '1px solid green';
    }else {
        list.style.border = '1px solid tomato';
    }

    listItem.appendChild(listItemTitle);
    listItem.appendChild(listItemDate);
    listDiv.appendChild(listItem);

    listLabel.appendChild(listLabelDiv);
    listLabel.appendChild(listDiv);
    appendMultip(listItem,listItemTitle,listItemDate);
    appendMultip(listDiv,listItem);

    appendMultip(listLabel,listLabelDiv,listDiv);

    list.appendChild(listLabel);

    console.log(obj.title)
    

    return list;

   
};

export {listCard};