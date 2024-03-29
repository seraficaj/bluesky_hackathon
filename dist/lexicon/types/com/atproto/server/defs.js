"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInviteCodeUse = exports.isInviteCodeUse = exports.validateInviteCode = exports.isInviteCode = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isInviteCode(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.server.defs#inviteCode');
}
exports.isInviteCode = isInviteCode;
function validateInviteCode(v) {
    return lexicons_1.lexicons.validate('com.atproto.server.defs#inviteCode', v);
}
exports.validateInviteCode = validateInviteCode;
function isInviteCodeUse(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.server.defs#inviteCodeUse');
}
exports.isInviteCodeUse = isInviteCodeUse;
function validateInviteCodeUse(v) {
    return lexicons_1.lexicons.validate('com.atproto.server.defs#inviteCodeUse', v);
}
exports.validateInviteCodeUse = validateInviteCodeUse;
