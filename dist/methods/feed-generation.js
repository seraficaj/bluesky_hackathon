"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xrpc_server_1 = require("@atproto/xrpc-server");
const algos_1 = __importDefault(require("../algos"));
const syntax_1 = require("@atproto/syntax");
function default_1(server, ctx) {
    server.app.bsky.feed.getFeedSkeleton(({ params, req }) => __awaiter(this, void 0, void 0, function* () {
        const feedUri = new syntax_1.AtUri(params.feed);
        const algo = algos_1.default[feedUri.rkey];
        if (feedUri.hostname !== ctx.cfg.publisherDid ||
            feedUri.collection !== 'app.bsky.feed.generator' ||
            !algo) {
            console.log(algos_1.default);
            console.log(feedUri);
            console.log(ctx.cfg.publisherDid);
            throw new xrpc_server_1.InvalidRequestError('Unsupported algorithm', 'UnsupportedAlgorithm');
        }
        /**
         * Example of how to check auth if giving user-specific results:
         *
         * const requesterDid = await validateAuth(
         *   req,
         *   ctx.cfg.serviceDid,
         *   ctx.didResolver,
         * )
         */
        const body = yield algo(ctx, params);
        return {
            encoding: 'application/json',
            body: body,
        };
    }));
}
exports.default = default_1;
