import {Component, OnInit} from '@angular/core';
import {Product} from "../models/Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crudAngular';
  products: Product[] = [];
  product: Product = new Product(0, "", "", 0);
  color = 'red';
  constructor() {
  }


  create(): void {
    this.products.push(this.product);
    this.product = new Product(0, "", "", 0);
  }

  delete(index: number): void {
    this.products.splice(index, 1);
  }

  ngOnInit(): void {
    this.products.push(new Product(1, "oto", "https://st.quantrimang.com/photos/image/2019/10/31/hinh-nen-o-to-dep-5.jpg", 400))
    this.products.push(new Product(2, "oto", "https://storage.googleapis.com/f1-cms/2020/08/b93bd613-20200826_092520.jpg", 600))
    this.products.push(new Product(3, "oto", "https://menback.com/wp-content/uploads/2022/01/xe-o-to-dat-nhat-the-gioi-menback.jpg", 700))

  }


}
