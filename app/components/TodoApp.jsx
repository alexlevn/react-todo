var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function(){
        return{
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },{
                    id: 2,
                    text: 'Clear the yard'
                },{
                    id: 3,
                    text: 'Fuct the code'
                },{
                    id: 4,
                    text: 'Play a video'
                }
            ]
        };
    },
    handleAddTodo: function(text){
        alert('Add todo:' + text);
    },
    render: function(){
        // debugger;
        var {todos} = this.state;

        return(
            <div>
                <TodoList todos= {todos} />
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;