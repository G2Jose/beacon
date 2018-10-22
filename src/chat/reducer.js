"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultState = {
    chats: [],
};
var chat = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        default: {
            return state;
        }
    }
};
exports.default = chat;
