declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<void>;
    edit: (id: any, product: any) => Promise<void>;
    delete: (id: any) => Promise<void>;
}
declare const _default: ProductService;
export default _default;
