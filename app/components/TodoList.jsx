var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

    render: function () {

        var {todos} = this.props;
        // debugger;        
        var renderTodos = () => {
            return todos.map((todo)=>{
                return (<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>)
                // Truyền thẳng giá trị onToggle lên props bên trên.
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;