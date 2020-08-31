import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

import { IOrder } from './order.interface';

@Injectable()
export class AppOrderService {
  private readonly orders$ = new BehaviorSubject<IOrder[]>([]);
  private readonly db;

  constructor() {
    const adapter = new FileSync('orderdb.json');
    this.db = low(adapter);
    this.db.defaults({ orders: [] }).write();
    const orders = this.db.get('orders').value();
    this.orders$.next(orders);
  }

  public getOrders$() {
    return this.orders$.asObservable();
  }

  public getOrders() {
    const publicOrders = this.orders$.getValue();
    for (let order of publicOrders) {
      for (let node in order) {
        if (node != 'time' && node != 'available') {
          delete order[node];
        }
      }
    }
    return publicOrders;
  }

  public addOrder(order: IOrder): void {
    const oldOrders = this.orders$.getValue();
    const newOrders = [...oldOrders, order];
    this.db.get('orders').push(order).write();
    this.orders$.next(newOrders);
  }
}
