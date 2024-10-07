const list = (function() {
    const constructor = (function () {
        function title (obj, title) {
            obj.title = title;
        };

        function description (obj, desc) {
            obj.description = desc;
        };

        function dueDate (obj, date) {
            obj.dueDate = date;
        };

        function priority (obj, priority) {
            obj.priority = priority;
        }

        return {title,description,dueDate, priority};
    })();


    const project = (function () {
        function name(obj, projectName) {
            obj.project = projectName;
        };

        return {name};
    })();

    return {constructor, project};
})();

export {list};