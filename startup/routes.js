const express = require("express");
const admin = require("../routes/admin");
const general = require("../routes/general");
const error = require("./error")
module.exports = function(app) {
    app.use(express.json());
    app.use("/api/admin", admin);
    app.use("/api/general", general);
    app.use(error)
}