var db = require("../models");

module.exports = function (app) {
    app.get("/api/products", function (req, res) {
        db.Product.findAll().then(function (dbProduct) {
            // console.log(dbProduct);
            res.json(dbProduct);
        })
    });
    app.get("/api/products/:id", function (req, res) {
        db.Product.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbProduct) {
            console.log(dbProduct);
            res.json(dbProduct);
        })
    });
    app.put("/api/products/:id", function (req, res) {
        console.log(req.body);
        db.Product.update(
            {
                stock_quantity: parseInt(req.body.newQuantity)
            }, {
                where: {
                    id: req.params.id
                }
            },
        ).then(function (dbProduct) {
            console.log(dbProduct);
            res.json(dbProduct);
        })
    });
    app.get("/api/buyproduct", function (req, res) {
        db.Product.findAll().then(function (dbProduct) {
            console.log(dbProduct);
            res.json(dbProduct);
        })
    });

    app.get("api/products/department/:departmentName", function (req, res) {
        db.Product.findAll({
            where: {
                department_name: req.params.departmentName
            }
        }).then(function (result) {
            res.json(result);
        })
    });

    app.post("/api/products", function (req, res) {
        db.Product.create(req.body).then(function (dbProduct) {
            res.json(dbProduct);
        })
    });

    app.delete("/api/products", function (req, res) {
        db.Product.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbProduct) {
            res.json(dbProduct);
        })
    });


}