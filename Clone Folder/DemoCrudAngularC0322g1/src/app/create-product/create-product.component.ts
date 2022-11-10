import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from "../../models/Product";
import {EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnChanges {
  @Input()
  productInput: Product = new Product(0,"","",0);

  product: Product = new Product(0,"","",0);
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.product = Object.assign({},this.productInput);

  }

  @Output()
  createEvent = new EventEmitter<Product>();
  createProduct(){
    this.createEvent.emit(this.product);
  }

}
