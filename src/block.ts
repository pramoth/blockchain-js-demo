import * as crypto from 'crypto-js'

export class Block {
    private hash: string

    constructor(private timestemp: string, private data: string, private previousHash: string) {
        this.hash = this.calcalateHash()
    }

    calcalateHash(): string {
        return crypto.SHA256(this.timestemp + this.data + this.previousHash).toString()
    }
    isValid(){
        return this.hash === crypto.SHA256(this.timestemp + this.data + this.previousHash).toString()
    }
}