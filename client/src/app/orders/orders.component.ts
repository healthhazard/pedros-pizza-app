import {
  Component,
  OnInit,
} from '@angular/core';
import { IOrder } from '../../../../server/src/services/order/order.interface';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material/dialog';
import { AppOrderComponent } from './order/order.component';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class AppOrdersComponent implements OnInit {
  orders: IOrder[] = []

  constructor(
    private readonly appService: AppService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.appService
      .getOrders()
      .subscribe((response: { orders: IOrder[] }) => {
        this.orders = this.sortOrders(response.orders);
      });
  }

  sortOrders(orders): IOrder[] {
    return orders.sort((a, b) => {
      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;
      return 0;
    });
  }

  openDialog(order): void {
    this.dialog.open(AppOrderComponent, {
      data: {
        order: order
      }
    });
  }
}
