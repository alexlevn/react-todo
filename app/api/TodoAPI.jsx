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
        } catch (e) { // do nothing
        }

        return $.isArray(todos)
            ? todos
            : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // Filter by showCompleted;
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // Check the length of searchText outside this block, will does not waste the resourese.
        if (searchText.length !== 0) {
            
            searchText = searchText.toLowerCase();
            filteredTodos = filteredTodos.filter((todo) => {
                
                // console.log(`todo.text = ${todo.text} and indexOf(${searchText}=${todo.text.indexOf(searchText)}`);
                var lowerText = todo.text.toLowerCase();

                if (lowerText.indexOf(searchText) >= 0) {
                    return true; // Keep in the array
                } else {
                    return false; // Remove from the array
                }
            });
        }

        // Sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};
