var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
       todos:[
         {
           id:1,
           text: 'walk the dog'
         }, {
           id:2,
           text: 'Clean the yard'
         }, {
           id:3,
           text:'Leave mail on porch'
         }, {
           id:4,
           text: 'Play games'
         }
       ]
    };
  },
  handleAddTodo: function(text){
    alert("New To do:" + text)
  },
  render:function(){
    var {todos} = this.state;

    return(
      <div>
        <TodoList todos = {todos} />
        <AddTodo onAddTodo = {this.handleAddTodo} />
     </div>
    );
  }
})

module.exports = TodoApp;
