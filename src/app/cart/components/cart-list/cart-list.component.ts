import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActiveView } from 'src/app/models/active-view';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Output() viewChange = new EventEmitter<ActiveView>();
  items: CartItem[];

  constructor(private service: CartService) { }

  ngOnInit() {
    this.items = this.service.getItems();
  }

  emptyCart() {
    this.service.emptyCart();
    this.items = this.service.getItems();
  }

  removeItem(item: CartItem) {
    this.service.removeItem(item);
    this.items = this.service.getItems();
  }

  changeView() {
    this.viewChange.emit(ActiveView.productsList);
  }
}