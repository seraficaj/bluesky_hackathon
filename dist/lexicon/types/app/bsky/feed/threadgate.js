"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateListRule = exports.isListRule = exports.validateFollowingRule = exports.isFollowingRule = exports.validateMentionRule = exports.isMentionRule = exports.validateRecord = exports.isRecord = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isRecord(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        (v.$type === 'app.bsky.feed.threadgate#main' ||
            v.$type === 'app.bsky.feed.threadgate'));
}
exports.isRecord = isRecord;
function validateRecord(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.threadgate#main', v);
}
exports.validateRecord = validateRecord;
function isMentionRule(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.threadgate#mentionRule');
}
exports.isMentionRule = isMentionRule;
function validateMentionRule(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.threadgate#mentionRule', v);
}
exports.validateMentionRule = validateMentionRule;
function isFollowingRule(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.threadgate#followingRule');
}
exports.isFollowingRule = isFollowingRule;
function validateFollowingRule(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.threadgate#followingRule', v);
}
exports.validateFollowingRule = validateFollowingRule;
function isListRule(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.threadgate#listRule');
}
exports.isListRule = isListRule;
function validateListRule(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.threadgate#listRule', v);
}
exports.validateListRule = validateListRule;
