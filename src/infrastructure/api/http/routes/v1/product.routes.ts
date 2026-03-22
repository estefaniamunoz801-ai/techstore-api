import { Router } from "express";
import { CreateProductsController, ProductsController } from "../../../controllers/v1/Products.controller";

const router = Router();

const productsControllerInstance = new ProductsController();

router.get("/getproducts", (req, res) =>  {
    return productsControllerInstance.getProducts(req, res);
});

router.post("/createproducts", (req, res) =>  {
    const createProductsControllerInstance = new CreateProductsController();
    return createProductsControllerInstance.createProduct(req, res);
});

export default router;