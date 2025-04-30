import { Component } from '@angular/core';

import { products, Product } from '../../product';

@Component({
  selector: 'app-product-listings',
  standalone: false,
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})
export class ProductListComponent {
  products: Product[] = [...products];
}
