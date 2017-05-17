var React = require('react');

var AddTodo = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    var todoText = this.refs.task.value;
    if(todoText.length > 0){
      this.refs.task.value = '';
      this.props.onAddTodo(todoText);
    }else{
      this.refs.task.focus();
    }
  },
  render: function () {
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
           <input type = "text" ref = "task" placeholder = "Add Task" />
           <input type = "submit" value ="Add" />
        </form>
      </div>

    )
  }
})

module.exports = AddTodo;
