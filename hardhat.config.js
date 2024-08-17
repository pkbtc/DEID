require("@nomicfoundation/hardhat-toolbox");
const fs=require('fs');
const privatekey=fs.readFileSync('secret.txt').toString();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  
  solidity: "0.8.24",
};
