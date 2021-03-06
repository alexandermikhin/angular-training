import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { AppState } from 'src/app/core/state/app.state';
import * as act from 'src/app/core/state/products/products.actions';
import {
  getProducts,
  getProductsLoading
} from 'src/app/core/state/products/products.selectors';
import { Go } from 'src/app/core/state/router/router.actions';
import { ProductModel } from '../../models/product.model';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  cartSum: number;
  isLoading = true;
  products$: Observable<ProductModel[]>;
  loading$: Observable<boolean>;

  private subscription = new Subscription();

  constructor(
    private cartService: CartService,
    private store: Store<AppState>
  ) {
    this.initSubscription();
  }

  ngOnInit() {
    this.cartSum = this.cartService.cartSum;
    this.products$ = this.store.pipe(select(getProducts));
    this.loading$ = this.store.pipe(select(getProductsLoading));
    this.store.dispatch(new act.GetProducts());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onBuy(product: ProductModel) {
    this.cartService.addToCart({
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  onSeeDetails(product: ProductModel) {
    const link = ['/product', product.id];
    this.store.dispatch(new Go({ path: link }));
  }

  private initSubscription() {
    this.subscription.add(
      this.cartService.cartSumChanged.subscribe(sum => (this.cartSum = sum))
    );
  }
}
