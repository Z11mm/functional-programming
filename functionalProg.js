//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }
  
  const compose = (f, g) => (...args) => f(g(...args));
  
  const purchaseItem = (...operations) => {return operations.reduce(compose)};
  
  const addItemToCart = (user, item) => {
    const updateCart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updateCart });
  };
  
  const applyTaxToItems = (user) => {
    const { cart } = user;
    const taxRate = 1.03;
    const updatedCartWithTax = cart.map((item) => {
      return {
        name: item.name,
        price: item.price * taxRate
      }
    });
    return Object.assign({}, user, {cart: updatedCartWithTax});
  };
  
  const buyItem = (user) => {
    return Object.assign({}, user, {purchases: user.cart});
  };
  
  const emptyCart = (user) => {
    return Object.assign({}, user, {cart: []});
  };
  
  purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
  )(user, {name: 'laptop', price: 952});
