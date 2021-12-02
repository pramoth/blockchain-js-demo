import {Block} from "./block";

const DIFFICULTY = 5

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

    addBlock(newBlock: Block) {
        newBlock.previousHash = this.getlatesBlock().hash
        newBlock.mineBlock(DIFFICULTY)
        this.chain.push(newBlock)
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