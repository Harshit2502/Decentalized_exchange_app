import { abis } from "@my-app/contracts";
import Web3 from "web3";
import { getPairsInfo } from "./gertPirsInfo";



export const getFactoryInfo = async() => {
    const factory = new Web3.eth.Contract(abis.factory);

    const factoryInfo = {
        fee: await factory.methods.fee(),
        feeToSetter: await factory.methods.feeToSetter(),
        allPairsLength: await factory.methods.allPairsLength(),
        allpairs: []
    }
    for(let i=0;i< factoryInfo.allPairsLength;i++){
        factoryInfo.allpairs[i] = await factory.methods.allpairs(i).call();
    }

    factoryInfo.pairsInfo = await getPairsInfo(factoryInfo.allpairs,)

    return factoryInfo;
}