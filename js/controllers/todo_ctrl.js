(function() {
  'use strict';

  angular
    .module('todo')
    .controller('ToDoItemsController', ToDoItemsController);

  ToDoItemsController.$inject = ['toDoFactory'];

  function ToDoItemsController(toDoFactoryObj) {

    this.itemList = toDoFactoryObj.itemList;

    this.newItem = {
      text: '',
      completed: false,
      editing: false
    };

    this.addNewItem = function addNewItem() {
      toDoFactoryObj.itemList.push(this.newItem);
      this.newItem = {
        text: '',
        completed: false,
        editing: false
      };
    };

  }

})();
