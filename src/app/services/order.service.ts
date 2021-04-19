import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CardComponent} from '../card/card.component';
import {NotifyService} from './notify.service';

export interface Order {
  id: number;
  client: string;
  date: string;
  address: string;
}

@Injectable()
export class OrderService {

  baseURL = 'http://localhost:8080/order';

  constructor(private httpclient: HttpClient, private notifyService: NotifyService) {
  }

  getAll(): Observable<any> {
    return this.httpclient.get(this.baseURL);
  }

  delete(id: number): void {
    this.httpclient.get(this.baseURL + '/delete/' + id).subscribe(() => this.notifyService.notifyReloadComponent());
  }

  update(order: Order): void {
    this.httpclient.post(this.baseURL + '/update', order).subscribe(() => {
      console.log(order.id);
      window.location.reload();
    });
  }

  create(order: Order): void {
    this.httpclient.post(this.baseURL + '/create', order).subscribe(() => this.notifyService.notifyReloadComponent());
  }

  find(id: number): Observable<any>{
    return this.httpclient.get(this.baseURL + '/find/' + id);
  }
}
