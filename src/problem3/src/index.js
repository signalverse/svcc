import { PricesDatasource } from './PricesDatasource.js';

const PRICES_DATA_ENDPOINT = 'https://static.ngnrs.io/test/prices';

const ds = new PricesDatasource(PRICES_DATA_ENDPOINT);

ds.getPrices()
  .then(prices => {
    console.log(`prices: ${JSON.stringify(prices)}`);
    prices.forEach(price => {
      console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
    });
  })
  .catch(err => {
    console.err(err);
  });

