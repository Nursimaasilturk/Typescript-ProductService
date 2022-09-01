import { Product } from "./Product"; // Product classını kullanmak için dosyamıza import ettik.

export interface IProductService {
  // Farklı dosyada kullanmak için bunu da export ettik.

  // methodlar
  getById(id: number): Product;
  getProducts(): Array<Product>;
  savedProduct(product: Product): void;
  deleteProduct(product: Product): void;
}
