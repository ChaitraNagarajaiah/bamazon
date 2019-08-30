----creates the bamazon database----
CREATE DATABASE bamazon;

USE DATABASE;

INSERT INTO PRODUCT(id,product_name, department_name, price, stock_quantity) 
VALUES(1,"olay", "cosmetics", 9.99, 20),
      (2,"tide", "liquidwash", 4.99, 10),
      (3,"colgate", "toothpaste",3.45, 30),
      (4,"samsungtv","electronics",500, 5),
      (5,"kenox","backpack", 30, 10),
      (6,"ziploc","bags",9, 50),
      (7,"izze sparkling juice", "beverages", 15, 30),
      (8,"softsoap", "handsoap", 12, 8),
      (9,"quaker", "food", 20, 15),
      (10,"hplaptop","laptops",450, 9)

  SELECT * FROM PRODUCT;    