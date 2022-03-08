import { HttpRequest } from './HttpRequest.js';
import { PriceEntity } from './PriceEntity.js';

function PricesDatasource(url) {
  this.url = url;
}

PricesDatasource.prototype.getPrices = function() {
  return HttpRequest({url: this.url})
    .then(data => {
      const result = JSON.parse(data, (key, value) => {
        if (key.toLowerCase() !== 'prices') {
          return value;
        }

        const prices = [];

        for (const element of value) {
          prices.push(new PriceEntity(element));
        }

        return prices;
      });

      if (!result || !result.data || !result.data.prices) {
        throw new Error('No data');
      }

      return result.data.prices;
    });
}

export {
  PricesDatasource,
};

