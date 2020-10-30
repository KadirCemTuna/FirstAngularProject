import {Component} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent{
  productName = 'A Book';
  isDisabled = true;
  products = ['A book', 'A tree'];

  constructor() {
   setTimeout(() => {
      // this.productName = 'A Tree!!';
      this.isDisabled = false;
   }, 3000);
  }

  // tslint:disable-next-line:typedef
  onAddProduct() {
    this.products.push(this.productName);
  }
}

