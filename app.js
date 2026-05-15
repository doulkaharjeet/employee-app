var app = angular.module("employeeApp", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider

    .when("/", {
        templateUrl: "views/home.html",
        controller: "HomeController"
    })

    .when("/employees", {
        templateUrl: "views/employees.html",
        controller: "EmployeeController"
    })

    .otherwise({
        redirectTo: "/"
    });

});