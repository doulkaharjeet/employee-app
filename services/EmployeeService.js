app.service("EmployeeService", function() {

    var employees = [
        {
            id: 1,
            name: "Harjeet",
            department: "IT",
            salary: 50000
        },
        {
            id: 2,
            name: "Riya",
            department: "HR",
            salary: 40000
        }
    ];

    this.getEmployees = function() {
        return employees;
    };

    this.addEmployee = function(emp) {
        employees.push(emp);
    };

});