"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_redux_helpers_1 = require("react-navigation-redux-helpers");
var createNavigationMiddleware = function () { return react_navigation_redux_helpers_1.createReactNavigationReduxMiddleware('root', function (state) { return state.navigation; }); };
exports.default = createNavigationMiddleware;
