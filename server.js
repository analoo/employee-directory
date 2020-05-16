const express = require("express");
const mongoose = require("mongoose")
const path = require("path");


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Should this be Mongod_URI instead of Node-ENV?
if (process.env.MONGODB_URI === "production") {
    app.use(express.static("client/build"));
  }

  app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongoEmployeeDirectory", { useNewUrlParser: true });

// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});







