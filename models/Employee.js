const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: String,
    // jobTitle: String,
    image: String,
    // manager: String,
    // directReports: [{
    //     employee_id: String
    // }],
    // location: String,
    phone: String,
    email: String,
    dob: String

});


const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
