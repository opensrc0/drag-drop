var app = angular.module('customerApp', ['ngRoute','ui.bootstrap']);
app.controller('rightSideController', rightSideController);

app.config(['$routeProvider' ,function($routeProvider) {
    $routeProvider
    .when("/", {
        template : "“Please select customer from left side to view detail”."
    })
    .when("/rightPanel/:index", {
        templateUrl : "partials/customerSelected.html",
        controller : "rightSideController"
    })
}]);