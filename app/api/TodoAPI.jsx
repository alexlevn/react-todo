var $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            // Save a array as string
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        // '[1,2]' => [1,2] // chuyển từ chuỗi sang mảng

        try {
            todos = JSON.parse(stringTodos); 
        } catch (e) {// do nothing
        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function(todos, showCompleted, searchText){
        var filteredTodos = todos;

        // Filter by showCompleted;
        filteredTodos = filteredTodos.filter((todo)=>{
            return !todo.completed || showCompleted;
        });

        // Filter by searchText;

        // Sort todos with non-completed first

        return filteredTodos;
    }
};
