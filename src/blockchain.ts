import {Block} from "./block";

export class Blockchain {
    chain: Block[]

    constructor() {
        this.chain = [this.createGenersisBlock()]
    }

    createGenersisBlock(): Block {
        return new Block(new Date(), 'Genesis block', '')
    }

    getlatesBlock(): Block {
        return this.chain[this.chain.length - 1]
    }

    addBlock(block: Block) {
        block.previousHash = this.getlatesBlock().hash
        block.hash = block.calculateHash();
        this.chain.push(block)
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i]
            const prevBlock = this.chain[i - 1]
            if (!currentBlock.isValid()) {
                return false
            }
            if (currentBlock.previousHash !== prevBlock.hash) {
                return false
            }
        }
        return true
    }
}