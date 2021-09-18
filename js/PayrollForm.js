//UC9

class Employee{

    empName;
    profileImg;
    gender;
    dept;
    salary;
    startDate;
    notes;

    set empName(empName){
        this.empName = empName;
    }
    set profileImg(profileImg){
        this.profileImg = profileImg;
    }
    set gender(gender){
        this.gender = gender;
    }
    set dept(dept){
        this.dept = dept;
    }
    set salary(salary){
        this.salary = salary;
    }
    set startDate(startDate){
        this.startDate = startDate;
    }
    set notes(notes){
        this.notes = notes;
    }
}

let emp = new Employee();

//UC8   
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function() {
    output.textContent = salary.value;
    emp.salary = salary.value;
});

const empName = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
empName.addEventListener('input',function() {
let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
if(nameRegex.test(empName.value)){
    nameError.textContent = "";
    emp.empName = empName.value;
}
else{
    nameError.textContent = "Name is incorrect";
}
});

function validateDate(){
    let startDate = document.querySelector('#year').value+'-'+document.querySelector('#month').value+'-'+document.querySelector('#day').value;
    let today = new Date();
    let givenDate = new Date(startDate+" 0:00:00");

    if(givenDate > today){
        console.log('Invalid date');
    }else{
        emp.startDate = startDate;
    }
}

function onSubmit(){
    const profileImg = document.querySelector("input[name='profile']:checked");
    emp.profileImg = profileImg.value;

    const gender = document.querySelector("input[name='gender']:checked");
    emp.gender = gender.value;

    const dept = document.querySelectorAll("input[type='checkbox']:checked");
    let departments = '';
    for (let i = 0; i < dept.length; i++) {   
        departments += dept[i].value+ ',';
    }   
    emp.dept = departments;

    const notes = document.querySelector('#notes');
    emp.notes = notes.value;
    
    validateDate();

    emp.salary = salary.value;
    
    console.log(emp);
    return false;
}

