import {Request, Response} from "express";
import productService from "../service/productService";


class ProductController {
    constructor() {
    }

    findAll = async (req:Request,res :Response)=>{
        let listProduct = await productService.getAll()
        res.status(200).json(listProduct)
    }
    AddProduct = async (req:Request,res :Response) =>{
        let product = req.body
        console.log(product)
        await productService.add(product);
        res.status(200).json('oke')
    }

    editProduct = async (req:Request,res :Response) =>{
        console.log(req.params.id)
        console.log(req.body)
        await productService.edit(req.params.id,req.body);
        res.status(200).json('edit oke')
    }

    remove = async (req:Request,res :Response) =>{
        await productService.delete(req.params.id);
        res.status(200).json('remove oke')
    }
}

export default new ProductController();