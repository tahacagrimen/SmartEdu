const express = require("express");
const mongoose = require("mongoose");
const pageRotue = require("./routes/pageRoute.js");
const courseRoute = require("./routes/courseRoute.js");

const app = express();

mongoose.connect("mongodb://localhost/smartedu-db").then(() => {
  console.log("DB Connected Successfully");
});

// Template Engine i yüklüyoruz
app.set("view engine", "ejs");

// Static dosyaları middlewares ile bağlamak
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", pageRotue);
app.use("/courses", courseRoute);

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
