import {Blockchain} from "./blockchain";
import {Block} from "./block";

let chain: Blockchain = new Blockchain()
chain.addBlock(new Block(new Date(), {amount:19}))
chain.addBlock(new Block(new Date(), {amount:19}))


console.log(JSON.stringify(chain,null,4))
console.log(`Is chain valid? :${chain.isChainValid()}`)
console.log('--------------try to change data-----------')
chain.chain[1].data = {amount:500}
chain.chain[1].hash = chain.chain[1].calculateHash()
console.log(`Is chain valid? :${chain.isChainValid()}`)