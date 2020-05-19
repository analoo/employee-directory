import axios from "axios";

export default {
    loadUsers: function () {
        return axios.get("/api/employees");
    },

    createUsers: function(){
      console.log("API request")
      return axios.post("api/employees/new", {})
    }

};