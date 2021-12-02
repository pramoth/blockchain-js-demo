import * as crypto from 'crypto-js'

export class Block {
    hash: string = ''
    nonce = 0

    constructor(public timestemp: Date, public data: any, public previousHash: string = '') {
        this.hash = this.calculateHash()
    }

    calculateHash(): string {
        return crypto.SHA256(this.timestemp.toISOString() + JSON.stringify(this.data) + this.previousHash + this.nonce).toString()
    }

    isValid() {
        return this.hash === this.calculateHash()
    }

    mineBlock(difficulty: number) {
        const padding = new Array(difficulty + 1).join("0")
        while (this.hash.substring(0, difficulty) !== padding) {
            this.nonce++
            this.hash = this.calculateHash()
        }
        console.log('Block mined.')
    }
}