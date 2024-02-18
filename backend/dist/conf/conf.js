"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dbConnect = function () {
    try {
        console.log(process.env.mongoURI);
        (0, mongoose_1.connect)(process.env.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(function () {
            console.log("connected");
        });
    }
    catch (error) {
        console.log("error", error);
    }
};
exports.dbConnect = dbConnect;
