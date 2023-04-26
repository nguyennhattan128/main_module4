import {Router} from "express";
import router from "./router";
import ProductController from "../controller/productController";

const productRouter = Router();

productRouter.get('/',ProductController.findAll )
productRouter.post('/',ProductController.AddProduct )
productRouter.put('/:id',ProductController.editProduct)
productRouter.delete('/:id',ProductController.remove)


export default productRouter
