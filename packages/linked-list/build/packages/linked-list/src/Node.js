"use strict";
exports.__esModule = true;
/**
 * Linked List Node
 */
exports.Node = function (name, data, nextNode) {
    if (data === void 0) { data = null; }
    if (nextNode === void 0) { nextNode = null; }
    return ({
        name: name,
        data: data
    });
};
