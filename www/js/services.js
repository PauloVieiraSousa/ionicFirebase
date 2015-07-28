angular.module('starter.services', [])
    .factory('Items', function ($firebaseArray) {
        var itemsref = new Firebase("https://example-firebaseio.firebaseIO.com/items");
        return $firebaseArray(itemsref);
    });