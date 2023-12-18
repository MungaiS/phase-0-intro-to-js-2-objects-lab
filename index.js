// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

const employee = { name: 'Sam' };

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
console.log(updatedEmployee);

const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
console.log(destructivelyUpdatedEmployee);
console.log(employee);

const newEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log(newEmployee);
console.log(employee);

const modifiedEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(modifiedEmployee);
console.log(employee);
