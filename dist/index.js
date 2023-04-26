"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./src/data_source");
const router_1 = __importDefault(require("./src/router/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
data_source_1.AppDataSource.initialize().then(() => {
    console.log('connect database success');
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('', router_1.default);
app.listen(3000, () => {
    console.log('server is running');
});
//# sourceMappingURL=index.js.map