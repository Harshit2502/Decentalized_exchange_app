import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x14E5133D14B7Ab98Db2AE0584d94a57801306BA2"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/EOLDOKz6ClOL4ubtBN9nb1Pt5rI_eVgl",
  },
};