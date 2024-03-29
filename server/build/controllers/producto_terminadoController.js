"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.producto_terminadoController = void 0;
const database_1 = __importDefault(require("../database"));
class Producto_terminadoController {
    // public async list_materia_prima (req: Request, res: Response) {
    //     const [rows, fields] = await pool.query('SELECT * FROM materia_prima');
    //     /*const materia_prima = await pool.query('SELECT * FROM materia_prima');
    //     console.log(materia_prima);*/
    //     res.json(rows);
    // }
    list_producto_terminado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const [producto_terminado] = yield database_1.default.query(' SELECT * FROM producto_terminado  ');
            res.json(producto_terminado);
        });
    }
    // aun esta pendiente la confirmacion para que se pueda usar 
    // public async getOne (req: Request, res: Response):  Promise<any> {
    //     const {id} = req.params;
    //     const [rows, fields] = await pool.query('SELECT * FROM materia_prima WHERE id =?',[id]);
    //     console.log(rows);
    //     res.json({text:'econtrado' });
    // }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_terminado } = req.params;
            const [producto_terminado] = yield database_1.default.query('SELECT * FROM producto_terminado WHERE  id_terminado = ?', [id_terminado]);
            console.log(producto_terminado);
            // res.json({text:'econtrado'});
            res.json(producto_terminado);
        });
    }
    // public getOne(req: Request, res: Response){
    //     res.json({text: 'ide ingresado: '+ req.params.id})
    // }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO producto_terminado set ? ', [req.body]);
            res.json({ message: 'nuevo producto terminado ingresaso . ' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_terminado } = req.params;
            yield database_1.default.query('UPDATE producto_terminado set ? WHERE id_terminado = ?', [req.body, id_terminado]);
            res.json({ message: ' se actualizo el elemento' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_terminado } = req.params;
            yield database_1.default.query('DELETE FROM producto_terminado WHERE id_terminado = ?', [id_terminado]);
            res.json({ message: ' Se a eliminado un elemento' });
        });
    }
}
exports.producto_terminadoController = new Producto_terminadoController();
exports.default = exports.producto_terminadoController;
