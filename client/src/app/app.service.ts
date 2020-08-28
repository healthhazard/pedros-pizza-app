import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { retryWhen, delay } from 'rxjs/operators';

import { IOrder } from '../../../server/src/services/order/order.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private ws = webSocket(
    `${location.protocol === 'http:' ? 'ws' : 'wss'}://${location.host}/api`
  ).pipe(retryWhen((errors) => errors.pipe(delay(5000))));

  constructor(private readonly httpClient: HttpClient) {}

  public getOrders(): Observable<any> {
    return this.ws;
  }

  public getPizzas() {
    return this.httpClient.get('/api/pizza');
  }

  public sendOrder(order: IOrder) {
    return this.httpClient.post('api/order', order);
  }
}
