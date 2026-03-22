import { Request, Response } from 'express';
import { getProductsUseCase } from '../../../../application/use-cases/products/getProducts.usecase';
import { createProductsUseCase } from '../../../../application/use-cases/products/createProducts.usecase';

export class ProductsController {
  public async getProducts(req: Request, res: Response) {
    const products = getProductsUseCase();
    return res.status(200).json(products);
  }
}

export class CreateProductsController {
  public async createProduct(req: Request, res: Response) {
    const { name, price } = req.body;
    const newProduct = createProductsUseCase({ name, price });
    return res.status(201).json(newProduct);
  }
}