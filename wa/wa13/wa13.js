// Problem 1
let problem1 = [
    {
        "first name": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raiseEligible": true 
    },
    {
        "firstName": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseEligible": true
    },
    {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseEligible": false
    }    
];

console.log("Problem 1", problem1);

// Problem 2
let problem2 = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": problem1
};
   
console.log("Problem 2", problem2);

// Problem 3
problem1.push({
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseEligible": false
});
   
console.log("Problem 3", problem1);

// Problem 4
let totalSalary = problem1.reduce((total, employee) => total + employee.salary, 0);
console.log("Problem 4", totalSalary);

// Problem 5
problem1.forEach(employee => {
    if (employee.raiseEligible) {
     employee.salary += employee.salary * 0.1;
     employee.raiseEligible = false;
    }
});
   
console.log("Problem 5", problem1);

// Problem 6
let wfh = ['Anna', 'Sam'];
problem1.forEach(employee => {
 employee.wfh = wfh.includes(employee.firstName);
});

console.log("Problem 6", problem1);
