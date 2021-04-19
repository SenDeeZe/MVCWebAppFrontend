import {Component, Input, OnInit} from '@angular/core';
import {Order, OrderService} from '../services/order.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  order: Order;

  constructor(private orderService: OrderService) {
  }

  delOnClick(): void {
    this.orderService.delete(this.order.id);
  }
  updOnClick(): void {
    this.orderService.update(this.order);
  }
}
