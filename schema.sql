----creates the bamazon database----
CREATE DATABASE bamazon;

USE DATABASE;

INSERT INTO PRODUCT(product_name, department_name, price, stock_quantity) 
VALUES("olay", "cosmetics", 9.99, 20),
      ("tide", "liquidwash", 4.99, 10),
      ("colgate", "toothpaste",3.45, 30),
      ("samsungtv","electronics",500, 5),
      ("kenox","backpack", 30, 10),
      ("ziploc","bags",9, 50),
      ("izze sparkling juice", "beverages", 15, 30),
      ("softsoap", "handsoap", 12, 8),
      ("quaker", "food", 20, 15),
      ("hplaptop","laptops",450, 9)

  SELECT * FROM PRODUCT;    