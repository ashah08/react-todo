var React = require('react');
var ReactDOM = require('react-dom')
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(<TodoSearch/>).toExist();
  });

  it('should call onSearch will entered input text' , () => {
    var searchText = 'Walk';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch = {spy} />);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText.value);

    expect(spy).toHaveBeenCalledWith(false,'Walk');

  });

  it('should call onSearch will proper checked value', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch = {spy} />);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted.checked);

    expect(spy).toHaveBeenCalledWith(true,'');
  });
})
