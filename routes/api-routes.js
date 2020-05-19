const axios = require("axios");
var db = require("../models");


module.exports = function (app) {
    app.get("/api/employees/new", (req, res) => {
        axios({
            url: 'https://randomuser.me/api/',
            dataType: 'json',

        }).then(data => {
            let person = data.data.results[0]
            let name = person.name.first+" "+person.name.last
            let employee = {
                image: person.picture.medium,
                name: name,
                phone: person.cell,
                email: person.email,
                dob: person.dob.date
            }

            db.Employee.create(employee).then(res => console.log(res))
        })
            .catch(err => {
                console.log(err)
            })

    });

    app.get("/api/employees", (req, res) => {
        db.Employee.find()
            .then(results => {
                res.send(results)
            })
            .catch(err => {
                console.log(err)
            })
    })

    app.get("/api/employees/find", (req,res) => {
        db.Employee.find({
            name: req.body
        })
    })
}