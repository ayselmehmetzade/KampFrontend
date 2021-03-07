import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  product1 = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5 }
  product2 = { productId: 2, productName: 'Leptop', categoryId: 2, unitPrice: 15 }
  product3 = { productId: 3, productName: 'Telefon', categoryId: 2, unitPrice: 55 }
  product4 = { productId: 4, productName: 'Mouse', categoryId: 2, unitPrice: 25 }
  product5 = { productId: 5, productName: 'Masa', categoryId: 1, unitPrice: 15 }

  products = [this.product1, this.product2, this.product3, this.product4, this.product5]
  
  constructor() { }

  ngOnInit(): void {
  }

}
