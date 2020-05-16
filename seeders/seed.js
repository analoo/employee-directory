let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/mongoEmployeeDirectory", {
  useNewUrlParser: true,
  useFindAndModify: false
});


// clears existing database
db.Employee.deleteMany({})
  .then(data => {
      console.log(data)
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
