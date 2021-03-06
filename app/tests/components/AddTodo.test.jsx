var React = require('react');
var ReactDOM = require('react-dom')
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it("should call on valid data", () => {
     var toTask = "Check Valid Task";
     var spy = expect.createSpy();
     var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy} />);
     var $el = $(ReactDOM.findDOMNode(addTodo));

     addTodo.refs.task.value = toTask;
     TestUtils.Simulate.submit($el.find('form')[0])

     expect(spy).toHaveBeenCalledWith(toTask)
  });

  it("should not call on Inalid data", () => {
     var toTask = "";
     var spy = expect.createSpy();
     var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy} />);
     var $el = $(ReactDOM.findDOMNode(addTodo));

     addTodo.refs.task.value = toTask;
     TestUtils.Simulate.submit($el.find('form')[0]);

     expect(spy).toNotHaveBeenCalled(toTask);
  });


})
