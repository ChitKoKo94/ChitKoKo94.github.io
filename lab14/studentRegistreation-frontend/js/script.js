window.onload = display;

let studentData;

async function display() {
    let response = await fetch("http://localhost:3000/students");
    if (response.ok) {
        document.getElementById('myform').reset();
        studentData = await response.json();
        document.getElementById('tbodyStudentList').innerHTML = '';
        for (let e of studentData) {
            addRowToTable(e.id, e.name, e.program);
        }
        addStudentIds(studentData);
    }
    else alert("Error" + response.status);
}

function addRowToTable(id, name, program) {
    let row = document.createElement('tr');
    row.setAttribute("id", id);
    for (let e of arguments) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(e));
        row.appendChild(cell);
    }
    document.getElementById('tbodyStudentList').appendChild(row);
}

function addStudentIds() {
    let idDropdown = document.getElementById('ddlStudent');
    idDropdown.innerHTML = '';
    let idDropdownForUpdate = document.getElementById('ddlStudentForUpdate');
    idDropdownForUpdate.innerHTML = '';

    let option = document.createElement('option');
    option.value = '';
    option.text = 'Select Student Id';
    idDropdown.appendChild(option);

    option = document.createElement('option');
    option.value = '';
    option.text = 'Select Student Id';
    idDropdownForUpdate.appendChild(option);
    
    for (let student of studentData) {
        option = document.createElement('option');
        option.value = student.id;
        option.text = student.id;
        idDropdown.appendChild(option);

        option = document.createElement('option');
        option.value = student.id;
        option.text = student.id;
        idDropdownForUpdate.appendChild(option);
    }
}

async function addStudent(id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:3000/students", setting);
    if (response.ok) {
        display();
    } else alert("Error " + response.status);

}

document.getElementById('btnRegister').addEventListener("click", () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let program = document.getElementById('program').value;
    addStudent(id, name, program);
});

document.getElementById('btnDelete').addEventListener('click', () => {
    const idListDelete =  document.getElementById('ddlStudent');
    const selectedId = idListDelete.options[idListDelete.selectedIndex].text;
    removeStudent(selectedId);
});

async function removeStudent(id) {
    let setting = {
        method: "DELETE"
    }
    let response = await fetch("http://localhost:3000/students/" + id, setting);
    if (response.ok) 
        display();
    else 
        alert("Error " + response.status);
}

document.getElementById('ddlStudentForUpdate').addEventListener('change', () => {
    const idListDelete = document.getElementById('ddlStudentForUpdate');
    const selectedId = idListDelete.options[idListDelete.selectedIndex].text;
    let studentForUpdate = studentData.find(stu => stu.id === parseInt(selectedId));

    document.getElementById('idForUpdate').value = studentForUpdate.id;
    document.getElementById('nameForUpdate').value = studentForUpdate.name;
    document.getElementById('programForUpdate').value = studentForUpdate.program;
});

document.getElementById('btnUpdate').addEventListener('click', () => {
    const updatedStudent = {
        id: parseInt(document.getElementById('idForUpdate').value),
        name: document.getElementById('nameForUpdate').value,
        program: document.getElementById('programForUpdate').value 
    };
    updateStudent(updatedStudent);
    console.log('updating...', updatedStudent);
});

async function updateStudent(obj) {
    let setting = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:3000/students/" + obj.id, setting);
    console.log(response);
    if (response.ok) 
        display();
    else 
        alert("Error " + response.status);
}