const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Here we can tell express that we want to compile dynamic template with the pug engine
// and where to find these templates:
app.set("view engine", "pug");
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
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
