function PriceEntity(obj) {
  this.buy = obj.buy ? obj.buy : 0.0;
  this.sell = obj.sell ? obj.sell : 0.0;
  this.id = obj.id ? obj.id : 0;
  this.pair = obj.pair ? obj.pair : '';
  this.timestamp = obj.timestamp ? obj.timestamp : '';
}

PriceEntity.prototype.mid = function() {
  return (this.buy + this.sell)/200.0; // divide by 100 as 2 decimals for buy/sell
}

PriceEntity.prototype.quote = function() {
  return this.pair.length > 3 ? this.pair.substring(this.pair.length - 3) : '';
}

export {
  PriceEntity,
};

