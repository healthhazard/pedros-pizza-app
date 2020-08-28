import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'ws';

import { AppOrderService } from '../../services';

@WebSocketGateway()
export class AppOrderGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  public server: Server;

  constructor(private readonly orderService: AppOrderService) {}

  public afterInit(): void {
    this.orderService.getOrders$().subscribe(orders => {
      this.server.clients.forEach(client => {
        client.send(JSON.stringify({ orders: orders }));
      })
    })
  }

  public handleConnection(client: any): void {
    const orders = this.orderService.getOrders()
    client.send(JSON.stringify({ orders: orders }));
  }

  public handleDisconnect(client: any): void {}
}
