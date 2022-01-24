// Write your solution in this file!
const employee = {
    name: "Blob",
    streetAdress: "123 S Main",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey (employee, key) {
    const newObjTwo = {...employee};
    delete newObjTwo[key];
    return newObjTwo;
};
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
};
