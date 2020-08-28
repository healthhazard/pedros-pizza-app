export interface IPizza {
  id: number;
  name: string;
  prices: {
    small?: number;
    normal: number;
    large?: number;
  };
  description: string;
}
