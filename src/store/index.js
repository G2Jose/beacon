"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducer_1 = __importDefault(require("~/store/reducer"));
var middleware_1 = __importDefault(require("~/store/middleware"));
var composeEnhancers = redux_1.compose;
if (global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
}
var enhancer = composeEnhancers(redux_1.applyMiddleware.apply(void 0, __spread(middleware_1.default)));
var store = redux_1.createStore(reducer_1.default, enhancer);
exports.default = store;
