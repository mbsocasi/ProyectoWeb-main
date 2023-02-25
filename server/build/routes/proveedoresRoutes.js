"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedoresController_1 = __importDefault(require("../controllers/proveedoresController"));
class InventoryRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', proveedoresController_1.default.list_proveedores);
        this.router.get('/:id', proveedoresController_1.default.getOne);
        this.router.post('/', proveedoresController_1.default.create);
        this.router.put('/:id', proveedoresController_1.default.update);
        this.router.delete('/:id', proveedoresController_1.default.delete);
    }
}
const inventoryRoutes = new InventoryRoutes();
exports.default = inventoryRoutes.router;
