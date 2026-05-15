app.controller("EmployeeController",
function($scope, EmployeeService) {

    $scope.employees = EmployeeService.getEmployees();

    $scope.newEmployee = {};

    $scope.addEmployee = function() {

        var employee = {
            id: $scope.employees.length + 1,
            name: $scope.newEmployee.name,
            department: $scope.newEmployee.department,
            salary: $scope.newEmployee.salary
        };

        EmployeeService.addEmployee(employee);

        $scope.newEmployee = {};
    };

});