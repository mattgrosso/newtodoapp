(function() {
  'use strict';

  angular
    .module('todo')
    .factory('toDoFactory', toDoFactory);

  var toDoList = [];

  var localStorageKey = "storedItems";

  if(!localStorage.storedItems){
    localStorage.setItem(localStorageKey, JSON.stringify([]));
  }

  function updateLocalStorage(itemList) {
    localStorage.setItem(localStorageKey, angular.toJson(itemList));
    console.log(localStorage.localStorageKey);
  }

  function toDoFactory() {
    return {
      itemList: toDoList,
      save: updateLocalStorage
    };
  }

})();
