var React = require('react');
var ReactDOM = require('react-dom')
var expect = require('expect');
var $ = require('jQuery');
var TestUtil = require('react-addons-test-utils');

var TodoApp = require('Todo');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  })
})
