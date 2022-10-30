const express = require("express");

const router = express.Router();

const users = [];

// / => GET
router.get("/", (req, res, next) => {
  res.render("assignment4", {
    pageTitle: "Enter your name",
    path: "/",
  });
});

// /add-user => POST
router.post("/add-user", (req, res, next) => {
  users.push({ user: req.body.user });
  res.redirect("/users");
});

// /users => GET
router.get("/users", (req, res, next) => {
  res.render("assignment4-users", {
    users: users,
    pageTitle: "Users",
    path: "/users",
  });
});

module.exports = router;