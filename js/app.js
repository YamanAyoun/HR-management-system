'use strict';

let employeeArr = [];
function Employee(id, fullName, department, level, imageURL,salary) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
    employeeArr.push(this)
  }



  
  const employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./img/company.png");
  const employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "./img/company.png");
  const employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./img/company.png");
  const employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./img/company.png");
  const employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "./img/company.png");
  const employee6 = new Employee(1003, "Rana Saleh", "Development", "Junior", "./img/company.png");
  const employee7 = new Employee(1004, "Hadi Ahmad", "Finance", "Mid-Senior", "./img/company.png");

    
  Employee.prototype.calculateSalary = function(){
    if(this.level == 'Senior'){
      this.salary = randomNumber(1500,2000)-(randomNumber(1500,2000)*0.075);
    }else if(this.level == 'Mid-Senior'){
      this.salary = randomNumber(1000,1500)-(randomNumber(1000,1500));
    }else if(this.level == 'Junior'){
      this.salary = randomNumber(500,1000)-(randomNumber(500,1000));
    }
    return this.salary;
  }

  function randomNumber(min, max){
    return Math.floor(Math.random() * (max-min)+min);
  }
  Employee.prototype.render = function(){
    document.write(`name is ${this.fullName}`)
  }

  for(let i = 0; i < employeeArr.length; i++){
    document.write(`<hr>`)
    employeeArr[i].render();
  }