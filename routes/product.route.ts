import express, { Router } from "express";
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProductById } from "../controllers/product.controller"
export const productRoute = Router();

productRoute.get('/',getAllProducts)
productRoute.get('/:id',getProductById)
productRoute.post('/',addProduct)
productRoute.put('/:id',updateProductById)
productRoute.delete('/:id',deleteProduct)

export default productRoute;
