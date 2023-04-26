import {Product} from "../entity/product";
import {AppDataSource} from "../data_source";

class ProductService{
    private productRepository;
    constructor() {
        this.productRepository = AppDataSource.getRepository(Product);
    }

    getAll = async ()=>{
       let products = await this.productRepository.find({
            relations: {
                category: true,
            },
        })
        return products;
    }

    add = async  (product) =>{
        await this.productRepository.save(product)
    }

    edit = async (id, product) =>{
        await this.productRepository.update({id : id,},{
            "name": product.name,
                "price": product.price,
                "quantity": product.quantity,
                "category": product.category
        })
    }

    delete = async (id)=>{
        await this.productRepository.delete({id})
    }



}
export default new ProductService();