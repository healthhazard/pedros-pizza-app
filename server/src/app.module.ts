import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

import { AppOrderController, AppPizzaController } from './controllers';
import { AppOrderGateway } from './gateways';
import { AppOrderService, AppPizzaService } from './services';

const controllers = [AppOrderController, AppPizzaController];

const gateways = [AppOrderGateway];

const services = [AppOrderService, AppPizzaService]

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, '../../client/dist/client'),
    }),
  ],
  controllers: [...controllers],
  providers: [...services, ...gateways],
})
export class AppModule {}
