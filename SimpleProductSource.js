"use strict";
exports.__esModule = true;
exports.SimpleProductSource = void 0;
var Product_1 = require("./Product");
var SimpleProductSource = /** @class */ (function () {
    function SimpleProductSource() {
        this.products = new Array(new Product_1.Product(1, "Iphone", "Phone", 10000), new Product_1.Product(2, "Samsung", "Phone", 8000), new Product_1.Product(3, "Huawie", "Phone", 5000), new Product_1.Product(4, "MacBook", "Laptop", 20000), new Product_1.Product(5, "iWatch", "watch", 3000), new Product_1.Product(6, "Lenovo", "Laptop", 17000), new Product_1.Product(7, "iPad", "Tablet", 15000), new Product_1.Product(8, "JBL", "Headphone", 2000));
    }
    SimpleProductSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleProductSource;
}());
exports.SimpleProductSource = SimpleProductSource;
