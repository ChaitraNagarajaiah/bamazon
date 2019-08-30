const db = require('../models');

const items = [
    {
        product_name: 'olay',
        department_name: 'cosmetics',
        price: 9.99,
        stock_quantity: 20
    },
    {
        product_name: 'tide',
        department_name: 'liquidwash',
        price: 4.99,
        stock_quantity: 10
    },
    {
        product_name: 'colgate',
        department_name: 'toothpaste',
        price: 3.45,
        stock_quantity: 30
    },
    {
        product_name: 'samsungtv',
        department_name: 'electronics',
        price: 500,
        stock_quantity: 5
    },
    {
        product_name: 'kenox',
        department_name: 'backpack',
        price: 30,
        stock_quantity: 10
    },
    {
        product_name: 'ziploc',
        department_name: 'bags',
        price: 9,
        stock_quantity: 50
    },
    {
        product_name: 'izze sparkling juice',
        department_name: 'beverages',
        price: 15,
        stock_quantity: 30
    },
    {
        product_name: 'softsoap',
        department_name: 'handsoap',
        price: 12,
        stock_quantity: 8
    },
    {
        product_name: 'quaker',
        department_name: 'food',
        price: 20,
        stock_quantity: 15
    },
    {
        product_name: 'hplaptop',
        department_name: 'laptops',
        price: 450,
        stock_quantity: 9
    }
];

db.sequelize.sync({ force: true }).then(function () {
    db.Product.bulkCreate(items)
        .then(function (rows) {
            console.log(`\n${rows.length} Rows Inserted`);
        })
        .catch(function (err) {
            console.log('\nError:', err);
        });
});