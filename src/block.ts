import * as crypto from 'crypto-js'

export class Block {
    hash: string

    constructor(public timestemp: Date, public data: any, public previousHash: string = '') {
        this.hash = this.calculateHash()
    }

    calculateHash(): string {
        return crypto.SHA256(this.timestemp.toISOString() + JSON.stringify(this.data) + this.previousHash).toString()
    }

    isValid() {
        return this.hash === this.calculateHash()
    }
}