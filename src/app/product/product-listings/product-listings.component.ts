import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  standalone: false,
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})
export class ProductListComponent {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    const productObservable = this.productService.getProducts();
    productObservable.subscribe(
      (data) => { 
        this.products = data
      },
      (err) => { 
        console.error('something wrong occurred: ' + err); 
      }
    )
  }
}
