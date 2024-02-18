"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var conf_1 = require("./conf/conf");
var user_router_1 = __importDefault(require("./router/user.router"));
dotenv_1.default.config();
(0, conf_1.dbConnect)();
var port = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.ORIGIN_URI
}));
app.use(express_1.default.json());
app.use('/api/user', user_router_1.default);
app.listen(port, function () {
    console.log("server running on port ".concat(port));
});
