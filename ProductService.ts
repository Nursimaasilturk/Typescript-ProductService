import { IProductService } from "./IProductService"; //interface
import { Product } from "./Product";
import { SimpleProductSource } from "./SimpleProductSource";

export class ProductService implements IProductService {
  private dataSource: SimpleProductSource;
  private products: Array<Product>;

  // implement ettiğimiz interfacein bütün methodları geldi.
  getById(id: number): Product {
    // girdiğimiz id ye göre olan productı getirecektir.
    return this.products.filter((p) => p.id === id)[0];
  }
  getProducts(): Product[] {
    //productları getirdik.
    return this.products;
  }
  savedProduct(product: Product): void {
    //ürünün idsinin olup olmadığına veya güncellenme durumuna göre ürün ekleme.
    if (product.id === 0 || product.id == null) {
      // id yoksa yeni id ekleme
      product.id = this.generateId();
      // bu yeni ürünü diziye ekleme
      this.products.push(product);
    } else {
      // eğer ürün varsa
      // ürünün indexini bul.
      let index;
      // silinen ürünün idsine yeni eklediğimiz ürünü koyma.
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === product.id) {
          index = i;
        }
      }
      this.products.splice(index, 1, product);
    }
  }
  deleteProduct(product: Product): void {
    // silinecek ürünün listedeki indexini bul.
    let index = this.products.indexOf(product);
    if (index > 0) {
      this.products.splice(index, 1);
    }
  }

  // Classın kendi methodları
  private generateId(): number {
    // başlangıç değeri 1 , eğer o idye sahip bir product varsa +1,
    let key = 1;

    while (this.getById(key) != null) {
      key++;
    }
    return key;
  }
  //constructorlar
  constructor() {
    this.dataSource = new SimpleProductSource();
    this.products = new Array<Product>();
    //getProducts dizimizden gelen her elemanı dataSource içine ekledik.
    this.dataSource.getProducts().forEach((p) => this.products.push(p));
  }
}
