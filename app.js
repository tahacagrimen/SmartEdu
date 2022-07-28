const express = require("express");
const mongooose = require("mongoose");
const pageRotue = require("./routes/pageRoute.js");

const app = express();

await mongoose
  .connect("mongodb://localhost/smartedu-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Template Engine i yüklüyoruz
app.set("view engine", "ejs");

// Static dosyaları middlewares ile bağlamak
app.use(express.static("public"));

// Routes
app.use("/", pageRotue);

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
