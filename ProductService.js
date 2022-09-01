"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleProductSource_1 = require("./SimpleProductSource");
var ProductService = /** @class */ (function () {
    //constructorlar
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleProductSource_1.SimpleProductSource();
        this.products = new Array();
        //getProducts dizimizden gelen her elemanı dataSource içine ekledik.
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    // implement ettiğimiz interfacein bütün methodları geldi.
    ProductService.prototype.getById = function (id) {
        // girdiğimiz id ye göre olan productı getirecektir.
        return this.products.filter(function (p) { return p.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        //productları getirdik.
        return this.products;
    };
    ProductService.prototype.savedProduct = function (product) {
        //ürünün idsinin olup olmadığına veya güncellenme durumuna göre ürün ekleme.
        if (product.id === 0 || product.id == null) {
            // id yoksa yeni id ekleme
            product.id = this.generateId();
            // bu yeni ürünü diziye ekleme
            this.products.push(product);
        }
        else {
            // eğer ürün varsa
            // ürünün indexini bul.
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        // silinecek ürünün listedeki indexini bul.
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    // Classın kendi methodları
    ProductService.prototype.generateId = function () {
        // başlangıç değeri 1 , eğer o idye sahip bir product varsa +1,
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
