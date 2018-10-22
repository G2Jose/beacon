"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducer_1 = __importDefault(require("~/chat/reducer"));
var reducer_2 = __importDefault(require("~/navigation/reducer"));
exports.default = redux_1.combineReducers({
    chats: reducer_1.default,
    navigation: reducer_2.default,
});
