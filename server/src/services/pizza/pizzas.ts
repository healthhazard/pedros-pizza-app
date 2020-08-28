import { IPizza } from './pizza.interface';

export const pizzas: IPizza[] = [
  {
    id: 1,
    name: 'Margherita',
    prices: {
      normal: 5.0,
    },
    description: '',
  },
  {
    id: 2,
    name: 'Salami',
    prices: {
      normal: 6.5,
    },
    description: 'Salami',
  },
];
