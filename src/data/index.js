import products from './products.json';

export const getProducts = () => new Promise(function(resolve) {
  setTimeout(() => resolve(products), 500);
});
