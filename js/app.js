'use strict';
function Employee(id, fullName, department, level, imageURL,salary) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = salary;
  }


  Employee.prototype.calculateSalary = function() {
    let minSalary, maxSalary;
  
    switch (this.level) {
      case "Junior":
        minSalary = 500;
        maxSalary = 1000;
        break;
      case "Mid-Senior":
        minSalary = 1000;
        maxSalary = 1500;
        break;
      case "Senior":
        minSalary = 1500;
        maxSalary = 2000;
        break;
      default:
        minSalary = 0;
        maxSalary = 0;
        break;
    }
  
    const salary = Math.floor(Math.random() * (maxSalary - minSalary)) + minSalary;
    const taxAmount = salary * 0.075;
   
  
    return {salary};
  };

  const employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./img/company.png");
  const employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "./img/company.png");
  const employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./img/company.png");
  const employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./img/company.png");
  const employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "./img/company.png");
  const employee6 = new Employee(1003, "Rana Saleh", "Development", "Junior", "./img/company.png");
  const employee7 = new Employee(1004, "Hadi Ahmad", "Finance", "Mid-Senior", "./img/company.png");

    console.log(employee1);
    console.log(employee1.calculateSalary());
    
  
  
document.write('<h1> information for each employee</h1>');