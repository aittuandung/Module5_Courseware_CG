import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from "../../models/Product";
import {EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudProductService} from "../services/crud-product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(public crudProduct: CrudProductService) {

  }

  ngOnInit(): void {
  }

  createForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl("", Validators.minLength(6)),
    price: new FormControl(0, Validators.min(10)),
    img: new FormControl(null, Validators.pattern('[a-z]*.jpg$')),
    status: new FormControl(true),
  })


  createProduct() {
    console.log(this.createForm)
    if (this.createForm.valid){
      this.crudProduct.createAndEdit(this.createForm.value);
    }
  }


}
