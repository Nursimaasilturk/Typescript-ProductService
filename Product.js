"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    // başka dosyalarda kullanmak için export ettik.
    // Constructor içinde variable tanımlaması yaparak kod fazlalığından kurtulabiliriz.
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
