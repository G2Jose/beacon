"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var react_native_1 = require("react-native");
var faker_1 = __importDefault(require("faker"));
var chatListItem_1 = __importDefault(require("~/chat/chatListItem"));
var fakeData = {
    chats: Array(10)
        .fill(null)
        .map(function () { return ({
        participants: [faker_1.default.name.findName(), faker_1.default.name.findName()],
        messages: [
            { message: faker_1.default.lorem.sentence() },
            { message: faker_1.default.lorem.sentence() },
        ],
    }); }),
};
var mapStateToProps = function (state) { return ({
    chatList: fakeData,
}); };
var ChatListScreen = /** @class */ (function (_super) {
    __extends(ChatListScreen, _super);
    function ChatListScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatListScreen.prototype.render = function () {
        var chats = this.props.chatList.chats;
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            react_1.default.createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 } },
                react_1.default.createElement(react_native_1.View, null, chats.map(function (chat, index) { return (react_1.default.createElement(chatListItem_1.default, { chat: chat, key: index })); })))));
    };
    return ChatListScreen;
}(react_1.default.Component));
exports.default = react_redux_1.connect(mapStateToProps)(ChatListScreen);
