//Main Module + Routing Engine

var app = angular.module("employeeApp", ["ngRoute"]); 
//Create my app called employeeApp and enable page routing.

app.config(function($routeProvider) {

    $routeProvider
//Load this file, use this controller
    .when("/", {
        templateUrl: "views/home.html",
        controller: "HomeController"
    })
//Load this file, use this controller
    .when("/employees", {
        templateUrl: "views/employees.html",
        controller: "EmployeeController"
    })
//If route not found → send user back home
    .otherwise({
        redirectTo: "/"
    });

});