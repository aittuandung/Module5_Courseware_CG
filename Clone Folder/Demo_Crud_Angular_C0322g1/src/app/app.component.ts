import { Component } from '@angular/core';
import {Product} from "../models/Product";
import {CrudProductService} from "./services/crud-product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';

  constructor(public crudProduct: CrudProductService) {
  }
  products = this.crudProduct.products;
}
