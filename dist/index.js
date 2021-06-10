"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rutas_1 = __importDefault(require("./rutas"));
const cors = require('cors');
const path = require("path");
const app = express_1.default();
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(rutas_1.default);
app.use(express_1.default.static(path.join(__dirname, '../public')));
/*app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});*/
app.listen(3000, () => {
    console.log(`Servidor en puerto`, 3000);
});
//# sourceMappingURL=index.js.map