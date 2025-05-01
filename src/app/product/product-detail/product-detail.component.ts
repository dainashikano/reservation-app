import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.product = this.productService.getProductById(params.get('productId')!)
      const productObservable = this.productService.getProductById(params.get('productId')!)
      .pipe(
        tap((data) => {
          this.product = data;
        }),
        catchError((error) => {
          console.error('something wrong occurred: ' + error); 
          return of(null)
        })
      )
      .subscribe();
    })
  }
}
