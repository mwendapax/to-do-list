const list = (function() {
    class NewList {
        constructor(title,description,dueDate,priority,project){
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.project = project; 
        }
    }

    return {NewList};
})();

export {list};