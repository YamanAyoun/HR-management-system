'use strict';

MathMLElement;
let employeeArr = [];


function Employee(fullName, department, level, imageURL) {
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = `./img/Employee.png`;
  employeeArr.push(this);
}



Employee.prototype.calculateSalary = function () {
  if (this.level == 'Senior') {
    this.salary = randomNumber(1500, 2000) - (randomNumber(1500, 2000) * 0.075);
  } else if (this.level == 'Mid-Senior') {
    this.salary = randomNumber(1000, 1500) - (randomNumber(1000, 1500) * 0.075);
  } else if (this.level == 'Junior') {
    this.salary = randomNumber(500, 1000) - (randomNumber(500, 1000) * 0.075);
  }
  return this.salary;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateEmployeeID() {
  const id = Math.floor(1000 + Math.random() * 9000);
  return id;
}

 function render() {
    
  
const table = document.getElementById('table')

let thEl = document.createElement('tr');
table.appendChild(thEl);

let tdEl1 = document.createElement('th');
tdEl1.textContent = "Department Name";
thEl.appendChild(tdEl1);

let tdEl2 = document.createElement('th');
tdEl2.textContent = "Number of employees in each department";
thEl.appendChild(tdEl2);

let tdEl3 = document.createElement('th');
tdEl3.textContent = "Average salary of the department";
thEl.appendChild(tdEl3);

for(let i=0;i<employeeArr.length;i++){
    let trEl1 = document.createElement('tr');
    table.appendChild(trEl1);

    let tdEl1 = document.createElement('td');
    tdEl1.textContent = employeeArr[i].department;
    trEl1.appendChild(tdEl1)

    let tdEl2 = document.createElement('td');
    tdEl2.textContent = generateEmployeeID();
    trEl1.appendChild(tdEl2)

    let tdEl3 = document.createElement('td');
    // tdEl3.textContent = this.calculateSalary();
    trEl1.appendChild(tdEl3)
}


}


function getEmployee(){
  let jsonArr = localStorage.getItem('Employees');
  let dataFromStorage = JSON.parse(jsonArr);
  employeeArr = dataFromStorage;
}

getEmployee();
render();

