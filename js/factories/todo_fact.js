(function() {
  'use strict';

  angular
    .module('todo')
    .factory('toDoFactory', toDoFactory);

  var toDoList = [];

  var localStorageKey = "storedItems";

  if(!localStorage.storedItems){
    localStorage.setItem(localStorageKey, angular.toJson([]));
  }

  function updateLocalStorage(itemList) {
    localStorage.setItem(localStorageKey, angular.toJson(itemList));
    console.log(localStorage[localStorageKey]);
  }

  function toDoFactory() {
    return {
      itemList: JSON.parse(localStorage[localStorageKey]),
      save: updateLocalStorage
    };
  }

})();
