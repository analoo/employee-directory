const express = require("express");
const mongoose = require("mongoose")
const path = require("path");
// const routes = require("/routes")

const app = express();
const PORT = process.env.PORT || 3006;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.Node_ENV === "production") {
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
}


require("./routes/api-routes")(app);
require("./routes/html-routes")(app)


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongoEmployeeDirectory", { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});







