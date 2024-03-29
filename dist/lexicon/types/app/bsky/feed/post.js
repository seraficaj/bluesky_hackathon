"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTextSlice = exports.isTextSlice = exports.validateEntity = exports.isEntity = exports.validateReplyRef = exports.isReplyRef = exports.validateRecord = exports.isRecord = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isRecord(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        (v.$type === 'app.bsky.feed.post#main' || v.$type === 'app.bsky.feed.post'));
}
exports.isRecord = isRecord;
function validateRecord(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.post#main', v);
}
exports.validateRecord = validateRecord;
function isReplyRef(v) {
    return ((0, util_1.isObj)(v) && (0, util_1.hasProp)(v, '$type') && v.$type === 'app.bsky.feed.post#replyRef');
}
exports.isReplyRef = isReplyRef;
function validateReplyRef(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.post#replyRef', v);
}
exports.validateReplyRef = validateReplyRef;
function isEntity(v) {
    return ((0, util_1.isObj)(v) && (0, util_1.hasProp)(v, '$type') && v.$type === 'app.bsky.feed.post#entity');
}
exports.isEntity = isEntity;
function validateEntity(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.post#entity', v);
}
exports.validateEntity = validateEntity;
function isTextSlice(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.post#textSlice');
}
exports.isTextSlice = isTextSlice;
function validateTextSlice(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.post#textSlice', v);
}
exports.validateTextSlice = validateTextSlice;
