const category = (function () {
    let projects = ['Work', 'Personal', '+'];

    let items = JSON.parse(localStorage.getItem('category'));

    (function () {
        if(items === null) {
            localStorage.setItem('category', JSON.stringify(projects));
        }else {
            projects = items;
        }
    })();

    return {projects};
})();

export {category};