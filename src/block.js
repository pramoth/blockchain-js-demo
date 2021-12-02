"use strict";
exports.__esModule = true;
exports.Block = void 0;
var crypto = require("crypto-js");
var Block = /** @class */ (function () {
    function Block(timestemp, data, previousHash) {
        this.timestemp = timestemp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calcalateHash();
    }
    Block.prototype.calcalateHash = function () {
        return crypto.SHA256(this.timestemp + this.data + this.previousHash).toString();
    };
    Block.prototype.isValid = function () {
        return this.hash === crypto.SHA256(this.timestemp + this.data + this.previousHash).toString();
    };
    return Block;
}());
exports.Block = Block;
