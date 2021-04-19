import {Component, OnInit} from '@angular/core';
import {Order, OrderService} from './services/order.service';
import {NotifyService} from './services/notify.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listOrders: Order[];
  form: FormGroup;

  constructor(private orderService: OrderService, private notifyService: NotifyService) {
    this.notifyService.listenReloadComponentEvent().subscribe(() => this.ngOnInit());
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl()
    });
    this.orderService.getAll().subscribe((data: Order[]) => this.listOrders = data);
  }

  find(id: number): void {
    this.orderService.find(id).subscribe((data: Order) => {
        this.listOrders = [];
        this.listOrders.push(data);
        console.log(data);
      }
    );
  }
}
