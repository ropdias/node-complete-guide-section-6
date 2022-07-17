const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
// You must import the engine function from the express-handlebars using import
// import { engine } from 'express-handlebars';
// Or you should use the .engine() function after using require
// https://stackoverflow.com/questions/70008920/express-handlebars-error-handlebars-is-not-a-function
const expressHbs = require("express-handlebars");

const app = express();

app.engine(
  "hbs",
  expressHbs.engine({
    extname: ".hbs", // Changing the extension name from .handlebars to .hbs
    layoutsDir: "views/layouts", // Setting the layoutsDir
    defaultLayout: "main-layout", // Changing the default layout name
  })
);
app.set("view engine", "hbs");
// The default is process.cwd() [main directory where you called this command] and /views
// But you can set any folder you want here to search for the views
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found", layout: false }); // Using layout false here to not render any layout
});

app.listen(3000);
