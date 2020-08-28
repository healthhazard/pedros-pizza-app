import { Injectable } from '@nestjs/common';

import { pizzas } from './pizzas';

@Injectable()
export class AppPizzaService {
  constructor() {}

  public getPizzas() {
    return pizzas;
  }
}
