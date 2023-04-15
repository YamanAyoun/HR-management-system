'use strict';

MathMLElement;
let employeeArr = [];
let form = document.getElementById(`employeeForm`);
form.addEventListener(`submit`, addNewEmployee)

function Employee(fullName, department, level, imageURL) {
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = `./img/Employee.png`;
  employeeArr.push(this);
}




// const employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "");
// const employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "");
// const employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "");
// const employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "");
// const employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "");
// const employee6 = new Employee(1003, "Rana Saleh", "Development", "Junior", "");
// const employee7 = new Employee(1004, "Hadi Ahmad", "Finance", "Mid-Senior", "");


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

  const container = document.getElementById('container')

  const emDiv = document.createElement('div');
  container.appendChild(emDiv);

   
   getEmployee()

   
   if(employeeArr == null){
       employeeArr = [];
   } 

  for(let i = 0; i < employeeArr.length; i++){
    
  const emImage = document.createElement('img');
  emDiv.appendChild(emImage);
  emImage.src = `./img/${employeeArr[i].fullName}.png`
  emImage.alt = `Employee image`;
  

  const emH1 = document.createElement('p');
  emH1.textContent = `Name: ${employeeArr[i].fullName}`;
  emDiv.appendChild(emH1);

  const employeeID = document.createElement('p');
  employeeID.textContent = `ID: ${generateEmployeeID()}`;
  emDiv.appendChild(employeeID);


  const emDepartment = document.createElement('p');
  emDepartment.textContent = `Department: ${employeeArr[i].department}`;
  emDiv.appendChild(emDepartment);

  const employeeLevel = document.createElement('p');
  employeeLevel.textContent = `Level: ${employeeArr[i].level}`;
  emDiv.appendChild(employeeLevel);


  const emSalary = document.createElement('p');
  emDiv.appendChild(emSalary);
  emSalary.textContent = `Salary: ${employeeArr[i]}`;

}
}

function addNewEmployee(event) {
  // event.preventDefault();

  let fullName = event.target.fullName.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  let imageURL = event.target.imageURL.value;

  let newEmp = new Employee(fullName, department, level, imageURL)

  console.log('allEmployee Arr', employeeArr);

  let jsonArr = JSON.stringify(employeeArr);
  localStorage.setItem('Employees', jsonArr)

  newEmp.calculateSalary();
  // newEmp.render();
}


for (let i = 0; i < employeeArr.length; i++) {

  employeeArr[i].render();


}



function getEmployee(){
  let jsonArr = localStorage.getItem('Employees');
  let dataFromStorage = JSON.parse(jsonArr);
  employeeArr = dataFromStorage;
}

getEmployee();
render();
