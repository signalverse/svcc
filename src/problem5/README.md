# Problem 5

## Environment Variables (NOTE: Need to create .env file before using VS Code Remote Containers)

-   `BLOCKCHAIN_PLATFORM`: BSC
-   `COINMARKETCAP_API_KEY`: CoinMarketCap API Key to fetch gas price

-   `BSCSCAN_API_KEY`: BscScan API Key to verify contracts
-   `BSC_TESTNET_PRIVATE_KEY`: Private Key to deploy contracts to BSC Testnet

## Development

Open project folder using VS Code with Remote Containers extension then reopen in container and run shell commands in VS Code Terminal

## Deployment

### BSC Testnet

```console
$ npm run migrate-bsc-testnet-tokenbalances
```
## Test Deployed Contract

```console
node test/test.js
```

