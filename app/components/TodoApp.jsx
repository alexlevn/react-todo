var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: "",
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id: 2,
                    text: 'Clear the yard'
                }, {
                    id: 3,
                    text: 'Fuct the code'
                }, {
                    id: 4,
                    text: 'Play a video'
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        // alert('Add todo:' + text);
        var id = this.state.todos.length + 1;
        this.setState({
            todos: this
                .state
                .todos
                .concat({id: id, text: text})
        });
    },

    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    }, 

    render: function () {
        // debugger;
        var {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;