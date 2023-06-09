class Company {
    constructor(departments) {
        this.departments = {}
    }

    addEmployee(name, salary, position, department) {
        if (!(name && salary && position && department) || salary < 0) throw new Error('Invalid input!')

        if (!this.departments[department]) {
            this.departments[department] = []
        }
        this.departments[department].push({ salary, name, position })
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = "";
        let avgSalary = 0;
        for (let [department, employee] of Object.entries(this.departments)) {
            let currentAvgSalary = employee.reduce((acc, x) => acc + x.salary, 0)
            currentAvgSalary/=employee.length
            if (currentAvgSalary > avgSalary) {
                bestDepartment = department
                avgSalary = currentAvgSalary;
            }
        }
        let sortedDepartments = this.departments[bestDepartment]
        .sort((a,b)=>b.salary - a.salary || a.name.localeCompare(b.name))
        .map (x=>`${x.name} ${x.salary} ${x.position}`).join('\n')


        return `Best Department is: ${bestDepartment}\nAverage salary: ${avgSalary.toFixed(2)}\n${sortedDepartments}`

    }


}
let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());