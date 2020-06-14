import json from './products.json';

export const getProducts = () => new Promise(function(resolve) {
  setTimeout(() => resolve(json), 1500);
});
