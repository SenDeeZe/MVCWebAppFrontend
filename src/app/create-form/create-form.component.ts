import {Component, OnInit} from '@angular/core';
import {Order, OrderService} from '../services/order.service';
import {FormControl, FormGroup} from '@angular/forms';
import {NotifyService} from '../services/notify.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  form: FormGroup;

  constructor(private orderService: OrderService, private notifyService: NotifyService) {
    this.notifyService.listenReloadComponentEvent().subscribe(() => this.ngOnInit());
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      client: new FormControl(),
      date: new FormControl(),
      address: new FormControl()
    });
  }

  create(): void {
    console.log(this.form.value);
    console.log(this.form.value.client);
    console.log(this.form.value.date);
    console.log(this.form.value.address);
    this.orderService.create(this.form.value);
  }
}
