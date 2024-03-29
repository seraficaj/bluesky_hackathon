"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateViewBlocked = exports.isViewBlocked = exports.validateViewNotFound = exports.isViewNotFound = exports.validateViewRecord = exports.isViewRecord = exports.validateView = exports.isView = exports.validateMain = exports.isMain = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isMain(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        (v.$type === 'app.bsky.embed.record#main' ||
            v.$type === 'app.bsky.embed.record'));
}
exports.isMain = isMain;
function validateMain(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.record#main', v);
}
exports.validateMain = validateMain;
function isView(v) {
    return ((0, util_1.isObj)(v) && (0, util_1.hasProp)(v, '$type') && v.$type === 'app.bsky.embed.record#view');
}
exports.isView = isView;
function validateView(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.record#view', v);
}
exports.validateView = validateView;
function isViewRecord(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.embed.record#viewRecord');
}
exports.isViewRecord = isViewRecord;
function validateViewRecord(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.record#viewRecord', v);
}
exports.validateViewRecord = validateViewRecord;
function isViewNotFound(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.embed.record#viewNotFound');
}
exports.isViewNotFound = isViewNotFound;
function validateViewNotFound(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.record#viewNotFound', v);
}
exports.validateViewNotFound = validateViewNotFound;
function isViewBlocked(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.embed.record#viewBlocked');
}
exports.isViewBlocked = isViewBlocked;
function validateViewBlocked(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.record#viewBlocked', v);
}
exports.validateViewBlocked = validateViewBlocked;
