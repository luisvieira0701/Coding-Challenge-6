//Task 1 Create an Employees Array of Employee Objects
let employees = [
    {name: 'Michael Scott', shifts: [{day: 'monday', hours: 10}, {day: 'wednesday', hours: 8}]},
    {name: 'Jim Halpert', shifts: [{day: 'tuesday', hours: 10}, {day: 'thursday', hours: 8}]},
    {name: 'Dwight Shrute',shifts: [{day: 'friday', hours: 12}]}
]

//Task 2 Create a Function to Display Employee Shift Details
function displayEmployeeShift (employee) {
      employees.forEach(worker => (worker.name, worker.shifts))
        return (employee)
        // return (console.log(`Employee Shift Details: ${employee}`))
}

//Testing Task 2 Function with My Employees
let employeeShifts = displayEmployeeShift(employees)
console.log(`Employee Shift Details:`, employeeShifts)

