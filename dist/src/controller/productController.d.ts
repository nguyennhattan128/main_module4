import { Request, Response } from "express";
declare class ProductController {
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    AddProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
