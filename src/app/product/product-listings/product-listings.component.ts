import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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
    const productObservable = this.productService.getProducts().pipe(
      tap((data) => {
        this.products = data
      }),
      catchError((error) => {
                  return of(null)
      })
    )
    .subscribe();
  }
}
