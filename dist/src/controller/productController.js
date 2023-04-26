"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await productService_1.default.getAll();
            res.status(200).json(listProduct);
        };
        this.AddProduct = async (req, res) => {
            let product = req.body;
            console.log(product);
            await productService_1.default.add(product);
            res.status(200).json('oke');
        };
        this.editProduct = async (req, res) => {
            console.log(req.params.id);
            console.log(req.body);
            await productService_1.default.edit(req.params.id, req.body);
            res.status(200).json('edit oke');
        };
        this.remove = async (req, res) => {
            await productService_1.default.delete(req.params.id);
            res.status(200).json('remove oke');
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map