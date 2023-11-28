document.addEventListener('DOMContentLoaded', () => {
    getEmployees();
    getDepartments();
  });
  
  async function getEmployees() {
    const response = await fetch('/api/employees');
    const employees = await response.json();
  
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
  
    employees.forEach(employee => {
      const employeeDiv = document.createElement('div');
      employeeDiv.innerHTML = `
        <p><strong>Name:</strong> ${employee.name}</p>
        <p><strong>Position:</strong> ${employee.position}</p>
        <button onclick="editEmployee('${employee._id}')">Edit</button>
        <button onclick="deleteEmployee('${employee._id}')">Delete</button>
      `;
      employeeList.appendChild(employeeDiv);
    });
  }
  
  async function submitEmployee() {
    const name = document.getElementById('employeeName').value;
    const position = document.getElementById('employeePosition').value;
  
    const response = await fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, position }),
    });
  
    if (response.ok) {
      getEmployees();
      document.getElementById('employeeName').value = '';
      document.getElementById('employeePosition').value = '';
    }
  }
  
  async function editEmployee(id) {
    const newName = prompt('Enter new name:');
    const newPosition = prompt('Enter new position:');
  
    const response = await fetch(`/api/employees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newName, position: newPosition }),
    });
  
    if (response.ok) {
      getEmployees();
    }
  }
  
  async function deleteEmployee(id) {
    const response = await fetch(`/api/employees/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      getEmployees();
    }
  }
  
  async function getDepartments() {
    const response = await fetch('/api/departments');
    const departments = await response.json();
  
    const departmentList = document.getElementById('departmentList');
    departmentList.innerHTML = '';
  
    departments.forEach(department => {
      const departmentDiv = document.createElement('div');
      departmentDiv.innerHTML = `
        <p><strong>Name:</strong> ${department.name}</p>
        <p><strong>Location:</strong> ${department.location}</p>
        <button onclick="editDepartment('${department._id}')">Edit</button>
        <button onclick="deleteDepartment('${department._id}')">Delete</button>
      `;
      departmentList.appendChild(departmentDiv);
    });
  }
  
  async function submitDepartment() {
    const name = document.getElementById('departmentName').value;
    const location = document.getElementById('departmentLocation').value;
  
    const response = await fetch('/api/departments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, location }),
    });
  
    if (response.ok) {
      getDepartments();
      document.getElementById('departmentName').value = '';
      document.getElementById('departmentLocation').value = '';
    }
  }
  
  async function editDepartment(id) {
    const newName = prompt('Enter new name:');
    const newLocation = prompt('Enter new location:');
  
    const response = await fetch(`/api/departments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newName, location: newLocation }),
    });
  
    if (response.ok) {
      getDepartments();
    }
  }
  
  async function deleteDepartment(id) {
    const response = await fetch(`/api/departments/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      getDepartments();
    }
  }
  