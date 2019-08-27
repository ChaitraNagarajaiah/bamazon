var db = require("../models");

module.exports = function (app) {
    app.get("/api/products", function (req, res) {
        db.Product.findAll()
    }).then(function (dbProduct) {
        res.json(dbProduct);
    });

    app.post("/api/products", function (req, res) {
        db.Product.create(req.body).then(function (dbProduct) {
            res.json(dbProduct);
        })
    });

    app.delete("/api/products", function (req, res) {
        db.Product.destroy()
    }).then(function (dbProduct) {
        res.json(dbProduct);
    });


}