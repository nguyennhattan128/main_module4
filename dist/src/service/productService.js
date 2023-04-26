"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const data_source_1 = require("../data_source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find({
                relations: {
                    category: true,
                },
            });
            return products;
        };
        this.add = async (product) => {
            await this.productRepository.save(product);
        };
        this.edit = async (id, product) => {
            await this.productRepository.update({ id: id, }, {
                "name": product.name,
                "price": product.price,
                "quantity": product.quantity,
                "category": product.category
            });
        };
        this.delete = async (id) => {
            await this.productRepository.delete({ id });
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map