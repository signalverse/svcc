const { ethers } = require("ethers");

const ADDR = "0x74E426562E3BC4E403C4aE9B3da4235e87EC87a1"; // your contract address
const ABI = [
  {
    inputs: [
      { internalType: "address", name: "wallet", type: "address" },
      { internalType: "address[]", name: "tokens", type: "address[]" },
    ],
    name: "getBalances",
    outputs: [
      {
        components: [
          { internalType: "address", name: "token", type: "address" },
          { internalType: "uint256", name: "balance", type: "uint256" },
        ],
        internalType: "struct ITokenBalances.TokenBalanceDto[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]; // your contract ABI

const ADDRESS = "0xfbCAd2c3A90FBD94C335FBdF8E22573456Da7F68"; // some wallet address with token balance
const TOKENS = [
  // token contract addresses
  "0x5c2601D8E68cb2B615145d99245989Ae80D808Be", // Axes.Finance (AXES)
  "0xF223eca06261145b3287A0fEfd8cFAd371c7eb34", // Orion (ORN)
];

const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/", {
  name: "bsc-testnet",
  chainId: 97,
});

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);

  return balances;
};

test().then(console.log);
