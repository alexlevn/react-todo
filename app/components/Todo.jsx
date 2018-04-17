var React = require('react');

var Todo = React.createClass({
    render: function () {

        var {id, text, completed} = this.props;
        return (
            <div onClick={()=>{
                this.props.onToggle(id); 
                // Give the id & handle onToggle to the Father Component (container) for the processing.
            }}>
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        )
    }
});

module.exports = Todo;