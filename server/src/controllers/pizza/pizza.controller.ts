import { Controller, Get } from '@nestjs/common';
import { AppPizzaService } from '../../services';

@Controller('/api/pizza')
export class AppPizzaController {
  constructor(private readonly pizzaService: AppPizzaService) {}

  @Get()
  getPizzas() {
    return this.pizzaService.getPizzas();
  }
}
