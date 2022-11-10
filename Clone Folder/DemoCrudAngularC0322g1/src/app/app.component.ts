import { Component } from '@angular/core';
import {Product} from "../models/Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';
  products: Product[] = [];
  product: Product = new Product(0,"","",0);

  constructor() {
    this.products.push(new Product(1,"oto","https://st.quantrimang.com/photos/image/2019/10/31/hinh-nen-o-to-dep-5.jpg",500))
    this.products.push(new Product(2,"oto","https://storage.googleapis.com/f1-cms/2020/08/b93bd613-20200826_092520.jpg",500))
    this.products.push(new Product(3,"oto","https://menback.com/wp-content/uploads/2022/01/xe-o-to-dat-nhat-the-gioi-menback.jpg",500))
  }

  createAndEdit(product: Product): void{
    let  index = this.findIndexById(product.id);
    if(index!= -1){
      this.products[index] = product;
    }else {
      this.products.push(product);
    }
  }

  delete(index: number): void{
    this.products.splice(index,1);
  }


  showEdit(index:number){
    this.product = this.products[index];
  }

  findIndexById(id:number){
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id == id){
        return i;
      }
    }
    return -1;
  }

}
