import { Product } from "./Product";

export class SimpleProductSource {
  private products: Array<Product>;
  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Iphone", "Phone", 10000),
      new Product(2, "Samsung", "Phone", 8000),
      new Product(3, "Huawie", "Phone", 5000),
      new Product(4, "MacBook", "Laptop", 20000),
      new Product(5, "iWatch", "watch", 3000),
      new Product(6, "Lenovo", "Laptop", 17000),
      new Product(7, "iPad", "Tablet", 15000),
      new Product(8, "JBL", "Headphone", 2000)
    );
  }
  getProducts(): Product[] {
    return this.products;
  }
}
