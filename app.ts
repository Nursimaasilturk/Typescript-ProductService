import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();
let result;
let p = new Product();
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
