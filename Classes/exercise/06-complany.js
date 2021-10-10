class Company{
    constructor() {
        this.departments = {};
    }

    correctEmployeeInput(name, salary, position, department){
        return !(!name || !salary || salary < 0 || !position || !department);
    }

    addEmployee(name, salary, position, department){
        if (!this.correctEmployeeInput(name, salary, position, department)){
            throw new Error("Invalid input!");
        }

        const employee= {
            name,
            salary,
            position,
        }

        if (this.departments[department] === undefined){
            this.departments[department] = [];        }
        this.departments[department].push(employee);
        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
    }

    bestDepartment(){
        let bestSalary = 0;
        let bestDepartmentName;
        for (const department in this.departments){
            let currAverageSalary = 0
            this.departments[department].forEach((employee) => {
                currAverageSalary += employee.salary;
            });
            currAverageSalary = currAverageSalary / this.departments[department].length;
            if (currAverageSalary > bestSalary){
                bestSalary = currAverageSalary;
                bestDepartmentName = department;
            }
        }

        this.departments[bestDepartmentName].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        let result = "";
        result += `Best Department is: ${bestDepartmentName}\n`;
        result += `Average salary: ${bestSalary.toFixed(2)}\n`;
        this.departments[bestDepartmentName].forEach(e => {
            result += `${e.name} ${e.salary} ${e.position}\n`;
        });
        return result.trimRight()
    }
}


// class Employee {
//     constructor(name, salary, position) {
//         this.name = name;
//         this.salary = salary;
//         this.position = position
//     }
// }
//
//
// class Company{
//     constructor() {
//         this.departments = {};
//     }
//
//     correctEmployeeInput(name, salary, position, department){
//         return !(name === '' || name === undefined || name === null ||
//             salary < 0 || salary === '' || salary === undefined || salary === null ||
//             position === '' || position === undefined || position === null ||
//             department === '' || department === undefined || department === null);
//     }
//
//     addEmployee(name, salary, position, department){
//         if (!this.correctEmployeeInput(name, salary, position, department)){
//             throw new Error("Invalid input!");
//         }
//         const employee = new Employee(name, salary, position);
//
//         if (this.departments[department] === undefined){
//             this.departments[department] = [];        }
//         this.departments[department].push(employee);
//         return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
//     }
//
//     bestDepartment(){
//         let bestSalary = 0;
//         let bestDepartmentName;
//         for (const department in this.departments){
//             let currAverageSalary = 0
//             this.departments[department].forEach((employee) => {
//                 currAverageSalary += employee.salary;
//             });
//             currAverageSalary = currAverageSalary / this.departments[department].length;
//             if (currAverageSalary > bestSalary){
//                 bestSalary = currAverageSalary;
//                 bestDepartmentName = department;
//             }
//         }
//
//         this.departments[bestDepartmentName].sort((a, b) => {
//             return b.salary - a.salary || a.name.localeCompare(b.name);
//         });
//
//         let result = "";
//         result += `Best Department is: ${bestDepartmentName}\n`;
//         result += `Average salary: ${bestSalary.toFixed(2)}\n`;
//         this.departments[bestDepartmentName].forEach(e => {
//             result += `${e.name} ${e.salary} ${e.position}\n`;
//         });
//         return result
//     }
// }


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
// console.log(c.departments)

