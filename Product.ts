export class Product {
  // başka dosyalarda kullanmak için export ettik.
  // Constructor içinde variable tanımlaması yaparak kod fazlalığından kurtulabiliriz.
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public price?: number
  ) {}
}
