'use strict';

let employeeArr = [];
let form = document.getElementById(`employeeForm`);
form.addEventListener(`submit`, addNewEmployee)

function Employee(id, fullName, department, level, imageURL,salary) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
    employeeArr.push(this)
  }



  
  const employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "");
  const employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "");
  const employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "");
  const employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "");
  const employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "");
  const employee6 = new Employee(1003, "Rana Saleh", "Development", "Junior", "");
  const employee7 = new Employee(1004, "Hadi Ahmad", "Finance", "Mid-Senior", "");

    
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

  function generateEmployeeID() {
    const id = Math.floor(1000 + Math.random() * 9000);
    return id;
  }
  
  Employee.prototype.render = function(){

    const container = document.getElementById('container')

    const emDiv = document.createElement('div');
    container.appendChild(emDiv);
  
    
    const employeeID = document.createElement('p');
    employeeID.textContent = `Employee ID: ${generateEmployeeID()}`;
    container.appendChild(employeeID);

    const emH1 = document.createElement('h2');
    emH1.textContent = `Employee Name: ${this.fullName}`;
    emDiv.appendChild(emH1);

    const emDepartment = document.createElement('p');
    emDepartment.textContent = `Department: ${this.department}`;
    emDiv.appendChild(emDepartment);

    const employeeLevel = document.createElement('p');
    employeeLevel.textContent = `Level: ${this.level}`;
    container.appendChild(employeeLevel);

    const emImage = document.createElement('img');
    emDiv.appendChild(emImage);
    emImage.src = this.imageURL;
    
    const emSalary = document.createElement('h3');
    emDiv.appendChild(emSalary);
    emSalary.textContent = `${this.salary}`
    
  }

  function addNewEmployee(event){
    event.preventDefault();
    let id = event.target.id.value;
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.id.value;
    let imageURL = event.target.id.value;

    let newEmp = new Employee(id, fullName, department, level,imageURL)
    
    newEmp.render();
  }

  for(let i = 0; i < employeeArr.length; i++){
    document.write(`<hr>`);
    employeeArr[i].render();
  }

  
