// Adds an item to the shopping cart
const addToDb = (id) => {
  let shoppingCart = getShoppingCart();
//   console.log('shoppingCart :>> ', shoppingCart);
  const quantity = shoppingCart[id];

  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }

  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//   console.log('shoppingCart :>> ', shoppingCart);
};

// Removes an item from the shopping cart
const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (shoppingCart.hasOwnProperty(id)) {
    delete shoppingCart[id];
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
  }
};

// Retrieves the shopping cart from local storage
const getShoppingCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
    // console.log('shoppingCart :>> ', shoppingCart);
  }
  return shoppingCart;
};

// Deletes the shopping cart from local storage
const deleteShoppingCart = () => {
  localStorage.removeItem('shopping-cart');
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };
