'use strict';

let employeeArr = [];
let form = document.getElementById(`employeeForm`);
form.addEventListener(`submit`, addNewEmployee)

function Employee(id, fullName, department, level, imageURL) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = `./img/Employee.png`;
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
      this.salary = randomNumber(1000,1500)-(randomNumber(1000,1500)*0.075);
    }else if(this.level == 'Junior'){
      this.salary = randomNumber(500,1000)-(randomNumber(500,1000)*0.075);
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
  
    const emImage = document.createElement('img');
    emDiv.appendChild(emImage);
    emImage.src = this.imageURL;

    const emH1 = document.createElement('p');
    emH1.textContent = `Name: ${this.fullName}`;
    emDiv.appendChild(emH1);

    const employeeID = document.createElement('p');
    employeeID.textContent = `ID: ${generateEmployeeID()}`;
    emDiv.appendChild(employeeID);


    const emDepartment = document.createElement('p');
    emDepartment.textContent = `Department: ${this.department}`;
    emDiv.appendChild(emDepartment);

    const employeeLevel = document.createElement('p');
    employeeLevel.textContent = `Level: ${this.level}`;
    emDiv.appendChild(employeeLevel);

    
    const emSalary = document.createElement('p');
    emDiv.appendChild(emSalary);
    emSalary.textContent = `Salary: ${this.calculateSalary()}`
    
  }

  function addNewEmployee(event){
    event.preventDefault();
    
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.id.value;
    let imageURL = event.target.id.value;

    let newEmp = new Employee( fullName, department, level,imageURL)
    
    newEmp.calculateSalary();
    newEmp.render();
  }
  console.log(employeeArr);

  for(let i = 0; i < employeeArr.length; i++){
    
    employeeArr[i].render();
    
    
  }

  
