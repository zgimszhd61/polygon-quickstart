import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

// 你的MetaMask钱包的私钥，不要在生产环境中泄露
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

// RPC URL，可以从Alchemy、Infura等服务获取
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || "";


const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    // 配置Mumbai测试网
    mumbai: {
      url: MUMBAI_RPC_URL, // Mumbai测试网的RPC URL
      accounts: PRIVATE_KEY !== "" ? [`0x${PRIVATE_KEY}`] : [], // 使用私钥部署合约
      chainId: 80001, // Mumbai测试网的链ID
    },
  },
};

export default config;
