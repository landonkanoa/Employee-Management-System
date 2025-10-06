//Step 2//
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

//Step 3//
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `${this.name} is the manager of the ${this.department} department and manages a team size of ${this.teamSize}`
    }
}

//Step 4//
const employees = [
    new Employee("Jessie Wood", "Finance"),
    new Employee("Sam Morales", "Finance"),
    new Employee("Blake Parks", "HR")
];

const managers = [
    new Manager("Leila Stein", "Finance", 10),
    new Manager("Dominic Nicholson", "HR", 15)
];

//Step 5//
class Company {
    constructor(employees = []) {
        this.employees = employees;        
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        for (let employee of this.employees) {
            console.log(employee.describe());
        }
    }
};

//Step 6//
const newCompany = new Company()
for (let employee of employees) {
    newCompany.addEmployee(employee);
}
for (let manager of managers) {
    newCompany.addEmployee(manager);
}

newCompany.listEmployees()