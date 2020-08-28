import { Controller, Post, Body } from '@nestjs/common';
import { AppOrderService } from '../../services';
import { IOrder } from '../../services/order/order.interface';

@Controller('/api/order')
export class AppOrderController {
  constructor(private readonly orderService: AppOrderService) {}

  @Post()
  public getOrders(@Body() order: IOrder): void {
    this.orderService.addOrder(order);
  }
}
