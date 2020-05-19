const axios = require("axios");
var db = require("../models");


module.exports = function (app) {
    app.get("api/employees/new", (req,res) => {
        console.log("a request was made")
        axios.get("https://randomuser.me/api/")
        .then(res => {
            console.logr(res)
        })
        .catch(err => {
            console.log(err)
        })
    });

    app.get("/api/employees", (req,res) => {
        db.Employee.findAll({})
        .then(res => {
            console.log(res);
            res.json(res)
        })
        .catch(err => {
            console.log(err)
        })
    })
}