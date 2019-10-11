export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      items: [
        {
          id: 0,
          name: "Spearmint",
          price: 10.00
        },
        {
          id: 1,
          name: "Winter",
          price: 5.00
        },
        {
          id: 2,
          name: "Ice",
          price: 12.00
        }
      ],
      cart: [
        {
          id: 3,
          name: "Snowflake",
          price: 7.00
        }
      ],
      total: 0
    };
  }

  const cartTotal = cart => {
    var total = 0;
    cart.forEach(item => {
      total += item.price;
    });
    return total;
  };

  switch (action.type) {
    case "ADD_ITEM":
      var allCart = state.cart.slice(); // creating a copy of the cart array
      allCart.push(action.item);
      return Object.assign({}, state, {
        cart: allCart,
        total: cartTotal(allCart)
      });

    case "REMOVE_ITEM":
      var allCart = state.cart.slice();
      var itemIndex = allCart.indexOf(action.item);
      allCart.splice(itemIndex, 1);
      return Object.assign({}, state, {
        cart: allCart,
        total: cartTotal(allCart)
      });

    // take the price and continue to add it together ++
  }

  console.debug("Unhandled Dispatch!", action);
  return state;
}
