"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateByteSlice = exports.isByteSlice = exports.validateTag = exports.isTag = exports.validateLink = exports.isLink = exports.validateMention = exports.isMention = exports.validateMain = exports.isMain = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isMain(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        (v.$type === 'app.bsky.richtext.facet#main' ||
            v.$type === 'app.bsky.richtext.facet'));
}
exports.isMain = isMain;
function validateMain(v) {
    return lexicons_1.lexicons.validate('app.bsky.richtext.facet#main', v);
}
exports.validateMain = validateMain;
function isMention(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.richtext.facet#mention');
}
exports.isMention = isMention;
function validateMention(v) {
    return lexicons_1.lexicons.validate('app.bsky.richtext.facet#mention', v);
}
exports.validateMention = validateMention;
function isLink(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.richtext.facet#link');
}
exports.isLink = isLink;
function validateLink(v) {
    return lexicons_1.lexicons.validate('app.bsky.richtext.facet#link', v);
}
exports.validateLink = validateLink;
function isTag(v) {
    return ((0, util_1.isObj)(v) && (0, util_1.hasProp)(v, '$type') && v.$type === 'app.bsky.richtext.facet#tag');
}
exports.isTag = isTag;
function validateTag(v) {
    return lexicons_1.lexicons.validate('app.bsky.richtext.facet#tag', v);
}
exports.validateTag = validateTag;
function isByteSlice(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.richtext.facet#byteSlice');
}
exports.isByteSlice = isByteSlice;
function validateByteSlice(v) {
    return lexicons_1.lexicons.validate('app.bsky.richtext.facet#byteSlice', v);
}
exports.validateByteSlice = validateByteSlice;
