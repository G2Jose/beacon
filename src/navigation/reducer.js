"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_redux_helpers_1 = require("react-navigation-redux-helpers");
var navigation_1 = require("~/navigation");
var navigation = react_navigation_redux_helpers_1.createNavigationReducer(navigation_1.RootNavigator);
exports.default = navigation;
