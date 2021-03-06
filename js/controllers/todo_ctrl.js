(function() {
  'use strict';

  angular
    .module('todo')
    .controller('ToDoItemsController', ToDoItemsController);

  ToDoItemsController.$inject = ['toDoFactory'];

  function ToDoItemsController(toDoFactoryObj) {

    this.itemsLeft = function itemsLeft() {
      var itemsRemaining = 0;
      this.itemList.forEach(function countRemaining(each) {
        if(!each.completed){
          itemsRemaining++;
        }
      });
      return itemsRemaining;
    };

    this.itemList = toDoFactoryObj.itemList;

    var that = this;

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
      toDoFactoryObj.save(this.itemList);
    };

    this.keyPress = function keyPress(keyCode, item) {
      if (keyCode === 13 || keyCode === 27) {
        item.editing = !item.editing;
      }
    };

    this.deleteItem = function deleteItem(indexNumber) {
      this.itemList.splice(indexNumber, 1);
      toDoFactoryObj.save(this.itemList);
    };

    this.deleteCompleted = function deleteCompleted() {
      this.itemList.forEach(function removeCompleted(each, i) {
        if(each.completed){
          that.itemList.splice(i, 1);
        }
      });
      toDoFactoryObj.save(this.itemList);
    };

    this.showAll = function showAll() {
      this.allActive = true;
      this.completedActive = false;
      this.activeActive = false;
      this.filter = false;
    };

    this.showComplete = function showComplete() {
      this.allActive = false;
      this.completedActive = true;
      this.activeActive = false;
      this.filter = {completed: false};
    };

    this.showActive = function showActive() {
      this.allActive = false;
      this.completedActive = false;
      this.activeActive = true;
      this.filter = {completed: true};
    };

    this.showAll();

  }

})();
