CREATE DATABASE bamazon_db;

USE bamazon_db

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price DECIMAL (10, 2),
    stock_quantity INT (250),
    PRIMARY KEY (item_id)
)

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Denim Skirt","Clothing", 35, 20)

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Black Platform", "Shoes", 60, 50)

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Green Cateye Sunglasses", "Accessories", 20, 100)

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Gold Hoops", "Jewelry", 50, 100)

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("12 inch Bronze Planter", "Home Decor", 50, 200)

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("5 x 7 Area Rug", "Home Decor", 200, 125)

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("67 inch Mid Century Modern Floor Lamp", "Home Decor", 80, 75)

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Victrola Turntable", "Electronics", 99.99, 225)

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Epson LCD Projector with Speaker", "Electronics", 459.98, 105)

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Baebody Eye Gel", "Beauty", 26.49, 200)

SELECT * FROM products