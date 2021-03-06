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
    const allOrders = this.orders$.getValue();
    const publicOrders = [];
    let id = 0;
    for (let order of allOrders) {
      publicOrders[id] = {};
      for (let node in order) {
        if (node == 'time' || node == 'available') {
          publicOrders[id][node] = order[node];
        }
      }
      id++;
    }
    return publicOrders;
  }

  public addOrder(order: IOrder): void {
    const ts = new Date();
    order['timestamp'] = ts.toLocaleString();
    order['available'] = false;
    const allOrders = this.orders$.getValue();

    for (let item of allOrders) {
      if (item['time'] == order['time'] && item['available'] == true) {
        let i = allOrders.indexOf(item);
        allOrders[i] = order;
      }
    }

    this.db
      .get('orders')
      .find({ time: order['time'], available: true })
      .assign(order)
      .write();

    this.orders$.next(allOrders);
  }
}
