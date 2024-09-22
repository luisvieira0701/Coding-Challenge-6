//Task 1 Create an Employees Array of Employee Objects
let employees = [
    {name: 'Michael Scott', shifts: [{day: 'monday', hours: 10}, {day: 'wednesday', hours: 8}]},
    {name: 'Jim Halpert', shifts: [{day: 'tuesday', hours: 10}, {day: 'thursday', hours: 6}]},
    {name: 'Dwight Schrute',shifts: [{day: 'friday', hours: 12}]}
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

//Task 3 Create a Function to Assign a New Shift
function assignShift (employeeName, workDay, shiftHours) {
    let employee = employees.find(person => person.name === employeeName,)
    if (employee) {
        let shiftExists = employee.shifts.some(shift => shift.day === workDay);
    
        if (shiftExists) {
            return `Error: employee has already been assigned a shift for ${workDay}`;
        } else {
            employee.shifts.push({
                'day': workDay,
                'hours': shiftHours
            })
            return `Shift has been added for ${employeeName} on ${workDay}`
        } 
    }        
}

//Testing Task 3 Formula
console.log(assignShift('Dwight Schrute', 'thursday', 6))
console.log(assignShift('Michael Scott', 'monday', 10))

