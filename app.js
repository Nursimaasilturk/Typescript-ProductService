"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
var p = new Product_1.Product();
// indexe göre ürün getirme
result = _productService.getById(7);
// yeni product bilgilerini girme
p.name = "Nokia";
p.category = "Phone";
p.price = 700;
// productı diziye ekleme
_productService.savedProduct(p);
//
//_productService.deleteProduct(result);
// bütün ürünleri yazdırma
result = _productService.getProducts();
console.log(result);
