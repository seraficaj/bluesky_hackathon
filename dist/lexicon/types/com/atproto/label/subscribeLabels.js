"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInfo = exports.isInfo = exports.validateLabels = exports.isLabels = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isLabels(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.label.subscribeLabels#labels');
}
exports.isLabels = isLabels;
function validateLabels(v) {
    return lexicons_1.lexicons.validate('com.atproto.label.subscribeLabels#labels', v);
}
exports.validateLabels = validateLabels;
function isInfo(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.label.subscribeLabels#info');
}
exports.isInfo = isInfo;
function validateInfo(v) {
    return lexicons_1.lexicons.validate('com.atproto.label.subscribeLabels#info', v);
}
exports.validateInfo = validateInfo;
