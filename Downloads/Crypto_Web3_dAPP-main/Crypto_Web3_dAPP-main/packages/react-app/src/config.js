import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "[YOUR ADDRESS HERE]"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-mainnet.g.alchemy.com/v2/tU7g-uYLMzYvaU_v4fQdoITsYn4nVQz9",
  },
};