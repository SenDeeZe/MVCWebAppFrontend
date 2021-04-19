import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class NotifyService {
  private reloadComponent = new Subject<any>();

  notifyReloadComponent(): void {
    this.reloadComponent.next();
  }

  listenReloadComponentEvent(): Observable<any> {
    return this.reloadComponent.asObservable();
  }
}
