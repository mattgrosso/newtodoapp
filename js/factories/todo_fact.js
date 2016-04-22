(function() {
  'use strict';

  angular
    .module('todo')
    .factory('toDoFactory', toDoFactory);

  var toDoList = [];

  window.toDoList = toDoList;

  function toDoFactory() {
    return {
      itemList: toDoList,
      save: pushToList
    };
  }

  function pushToList() {
    console.log('pushToList is running');
  }

})();
