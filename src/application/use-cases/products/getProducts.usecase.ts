import { Product } from "../../../domain/entities/product";

export function getProductsUseCase(): Product[] {
  return [
    { id: "1", name: "Laptop", price: 5875900 },
    { id: "2", name: "Smartphone", price: 950000 },
    { id: "3", name: "Mouse", price: 25000 },
  ];
}