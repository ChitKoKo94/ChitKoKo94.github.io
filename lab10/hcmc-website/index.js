function Patient (id, firstName, middleName, lastName, birthDate, department, outpatient) {
    this.id = id; 
    this.firstName = firstName; 
    this.middleName = middleName;
    this.lastName = lastName; 
    this.birthDate = birthDate; 
    this.department = department; 
    this.outpatient = outpatient; 
};

window.onload = () => {
    let patientData = [];

    const loadData = (data) => {
        const tbody = document.getElementById('tbodyPatientsList');
        tbody.innerHTML = '';
        data.forEach(patient => {
          const row = document.createElement('tr');
    
          row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.firstName}</td>
            <td>${patient.middleName}</td>
            <td>${patient.lastName}</td>
            <td>${patient.birthDate.toLocaleDateString('en-us')}</td>
            <td>${patient.department}</td>
            <td>${patient.outpatient}</td>
          `;
    
          tbody.appendChild(row);
        });
    };

    document.getElementById('myForm').addEventListener('submit', event => {
        event.preventDefault();
        let formData = new Patient(
            document.getElementById('patientIdNumber').value, 
            document.getElementById('firstName').value,
            document.getElementById('middleInitials').value,
            document.getElementById('lastName').value,
            new Date(document.getElementById('dateOfBirth').value),
            document.getElementById('ddlDepartment').value,
            document.getElementById('radioIsOutPatientYes').checked ? 'Yes' : 'No'
        );
        console.log(formData);
        patientData.push(formData);
        loadData(patientData);
    });

    document.getElementById('chkElderlyPatients').addEventListener('click', event => {
        if (event.currentTarget.checked) {
            const elderlyOnly = patientData.filter(p => 
                new Date(Date.now()).getFullYear() - p.birthDate.getFullYear() >= 65
            );
            loadData(elderlyOnly);
        }
        else {
            loadData(patientData);
        }
    });

    document.getElementById('chkShowOutPatients').addEventListener('click', event => {
        console.log(patientData);
        if (event.currentTarget.checked) {
            const outPatientOnly = patientData.filter(p => p.outpatient === 'Yes');
            loadData(outPatientOnly);
        }
        else {
            loadData(patientData);
        }
    });
};