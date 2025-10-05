//Step 2//
class employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

//Step 3//
class manager extends employee {
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
    new employee("Jessie Wood", "Finance"),
    new employee("Sam Morales", "Finance"),
    new employee("Blake Parks", "HR")
];

const managers = [
    new manager("Leila Stein", "Finance", 10),
    new manager("Dominic Nicholson", "HR", 15)
];

//Step 5//