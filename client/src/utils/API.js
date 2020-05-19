import axios from "axios";

export default {
    loadUsers: function () {
        return axios.get("/api/employees");
    },

    createUsers: function(){
      console.log("API request")
      return axios.get("/api/employees/new")
    },

    findEmployees: function(employee){
      console.log("You called Find Employees")
      return axios.get("/api/employees/find", employee)
    }

};