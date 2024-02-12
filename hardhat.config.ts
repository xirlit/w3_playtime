import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

const { GOERLI_API, ACCOUNT_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {}
};

if (GOERLI_API && ACCOUNT_KEY) {
  config.networks = {
    hardhat: {},
    goerli: {
      url: GOERLI_API,
      accounts: [ACCOUNT_KEY]
    },
  }
}

export default config;
