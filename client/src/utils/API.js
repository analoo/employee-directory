import axios from "axios";

export default {
    loadUsers: function () {
        return axios.get("/api/employees");
    },

    createUsers: function(){
      return axios.get("/api/employees/new")
    },

    findEmployees: function(employee){
      return axios.get("/api/employees/find", employee)
    }

};