var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach (() => {
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
     it('should set valid todos array', () => {
       var todos = [{
         id: 1,
         text: "Valid data",
         completed: false
       }];
       TodoAPI.setTodos(todos);
       var actualTodos = JSON.parse(localStorage.getItem("todos"));
       expect(actualTodos).toEqual(todos);
     });

     it('should not set invalid todos array', () => {
       var badTodos = {a : 'b'};
       TodoAPI.setTodos(badTodos);
       expect(localStorage.getItem("todos")).toBe(null);
     });
  });

  describe('getTodos', () => {
    it("should return empty array for bad localStorage data" , () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it("should return todos array for valid localStorage data" , () => {
      var todos = [{
        id: 1,
        text: "Valid data",
        completed: false
      }];

      localStorage.setItem('todos',JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos(todos);
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id:1,
      text: 'Hello',
      completed: true
    },{
      id:2,
      text: 'Todo 2',
      completed: false
    },{
      id:3,
      text: 'Todo 3',
      completed: true
    }
  ]
    it("should show every item if showCompleted is true" , () => {
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos.length).toBe(3);
    });

    it("should show only pending item if showCompleted is false" , () => {
      var filterTodos = TodoAPI.filterTodos(todos,false,'');
      expect(filterTodos.length).toBe(1);
    });

    it("should show pending item first" , () => {
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos[0].completed).toBe(false);
    });

    it("should filer todos by searchText" , () => {
      var filterTodos = TodoAPI.filterTodos(todos,true,'todo');
      expect(filterTodos.length).toBe(2);
    });

    it("show all todos for empty searchText" , () => {
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos.length).toBe(3);
    });
  });

})
