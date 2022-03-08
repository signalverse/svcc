import { BigNumber, providers, utils } from 'ethers';
import { SwthToken__factory } from './contracts/factories/SwthToken__factory'

const LOOKUP_WALLET_ADDRESSES: string[] = [
  '0x123d475e13aa54a43a7421d94caa4459da021c77',
  '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
  '0xfe808b079187cc460f47374580f5fb47c82b87a5',
];

const RPC_ENDPOINT_URL: string = 'https://bsc-dataseed.binance.org/';
const BLOCKCHAIN_NAME: string = 'bsc-mainnet';
const CHAIN_ID: number = 56;
const SWTH_TOKEN_ADDRESS: string = '0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c';

async function main() {
  const provider: providers.Provider = new providers.JsonRpcProvider(
    RPC_ENDPOINT_URL,
    { name: BLOCKCHAIN_NAME, chainId: CHAIN_ID }
  );

  const swthToken = SwthToken__factory.connect(SWTH_TOKEN_ADDRESS, provider);
  const swthDecimals: number = await swthToken.decimals();

  for (let walletAddress of LOOKUP_WALLET_ADDRESSES) {
    const balance: BigNumber = await swthToken.balanceOf(walletAddress);
    console.log(`${walletAddress} ${utils.commify(utils.formatUnits(balance, swthDecimals))}`);
  }

  console.log('-');
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
});

