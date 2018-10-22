"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var react_navigation_redux_helpers_1 = require("react-navigation-redux-helpers");
var react_redux_1 = require("react-redux");
var chatListScreen_1 = __importDefault(require("~/chat/chatListScreen"));
var constants_1 = __importDefault(require("~/common/constants"));
var middleware_1 = __importDefault(require("~/navigation/middleware"));
var options = {
    navigationOptions: function () { return ({
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: constants_1.default.colors.titleBar,
        },
    }); },
    initialRouteName: 'Chats',
    cardStyle: {
        backgroundColor: 'white',
    },
};
exports.routes = {
    Chats: {
        screen: chatListScreen_1.default,
        navigationOptions: function () { return ({
            title: constants_1.default.appName,
        }); },
    },
};
exports.RootNavigator = react_navigation_1.createStackNavigator(exports.routes, options);
var navigationMiddleware = middleware_1.default();
exports.navigationMiddleware = navigationMiddleware;
var reduxifiedNavigator = react_navigation_redux_helpers_1.reduxifyNavigator(exports.RootNavigator, 'root');
var mapStateToProps = function (state) { return ({
    state: state.navigation,
}); };
var AppWithNavigationState = react_redux_1.connect(mapStateToProps)(reduxifiedNavigator);
exports.default = AppWithNavigationState;
