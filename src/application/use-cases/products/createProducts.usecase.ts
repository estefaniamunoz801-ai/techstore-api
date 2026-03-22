import { Product } from "../../../domain/entities/product"; 
import { AppError } from "../../../core/errors/AppError";
import { CreateProductDTO } from "../../dto/products/createProducts.dto";   

export function createProductsUseCase(productData: CreateProductDTO): Product {
  if (!productData.name || !productData.price) {
    throw new AppError("Name and price are required", 400);
  }
  if (productData.price <= 0) {
    throw new AppError("Price must be greater than zero", 400);
  }
  const newProduct: Product = {
    id: Math.random().toString(36).substr(2, 9),
    name: productData.name,
    price: productData.price,
  };
  return newProduct;    
}
