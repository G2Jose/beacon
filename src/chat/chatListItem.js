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
var react_native_1 = require("react-native");
var profileImage_1 = __importDefault(require("~/profile/profileImage"));
var ChatListItem = /** @class */ (function (_super) {
    __extends(ChatListItem, _super);
    function ChatListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatListItem.prototype.render = function () {
        var chat = this.props.chat;
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.image },
                react_1.default.createElement(profileImage_1.default, { size: 40 })),
            react_1.default.createElement(react_native_1.View, { style: styles.description },
                react_1.default.createElement(react_native_1.Text, { style: styles.contact }, chat.participants[0]),
                react_1.default.createElement(react_native_1.View, { style: styles.lastMessage },
                    react_1.default.createElement(react_native_1.Text, { style: [styles.message], numberOfLines: 1, ellipsizeMode: "tail" }, chat.messages[chat.messages.length - 1].message)))));
    };
    return ChatListItem;
}(react_1.default.Component));
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingVertical: 5,
        borderBottomColor: '#eaeaea',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
    },
    contact: {
        fontWeight: '600',
    },
    image: {
        paddingRight: 10,
        paddingVertical: 10,
        paddingLeft: 0,
    },
    message: {
        color: 'grey',
        flexWrap: 'wrap',
    },
    description: { flexDirection: 'column', flex: 1 },
    lastMessage: {},
});
exports.default = ChatListItem;
