import {
  Component,
  ChangeDetectorRef,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

import { IOrder } from '../../../../server/src/services/order/order.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppOrdersComponent implements OnInit, OnDestroy {
  private readonly orders = new BehaviorSubject<IOrder[]>([]);
  private readonly subs = new Subscription();
  public dataSource = this.orders.asObservable();
  public displayedColumns: string[] = ['time', 'available'];
  public orderForm = this.formBuilder.group({
    time: ['', Validators.required],
    customer: ['', Validators.required],
    phone: ['', Validators.required],
    comment: ['Notiz'],
    salami: [false],
    schinken: [false],
    thunfisch: [false],
    mozzarella: [false],
    champignons: [false],
    paprika: [false],
    zwiebel: [false],
    mais: [false],
    oliven: [false],
    ananas: [false],
    peperoni_mild: [false],
    peperoni_scharf: [false],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly appService: AppService
  ) {}

  public ngOnInit(): void {
    const sub = this.appService
      .getOrders()
      .subscribe((response: { orders: IOrder[] }) => {
        const orders = response.orders.sort((a, b) => {
          if (a.time < b.time) {
            return -1;
          }

          if (a.time > b.time) {
            return 1;
          }

          return 0;
        });
        this.orders.next(response.orders);
      });

    this.subs.add(sub);
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public onSubmit(): void {
    this.appService.sendOrder(this.orderForm.value).subscribe({
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.orderForm.reset();
      },
    });
  }
}
