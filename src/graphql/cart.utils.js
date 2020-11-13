export const addItemToCart = (cartItems, cartItemToAdd) => {
  return {...cartItems, [cartItemToAdd.id]: { ...cartItemToAdd, quantity: 1 }};
};
export const updateItemOnCart = (cartItems, cartItemToAdd) => {
  return {
    ...cartItems, 
    [cartItemToAdd.id]: {
        ...cartItems[cartItemToAdd.id], 
        quantity: cartItemToAdd.quantity
      }
    }
}
export const removeItemFromCart = (cartItems = {}, cartItemToRemove) => {
    const cart = Object.keys(cartItems);
    let result = {};
    cart.map(key => {
      if(key !== cartItemToRemove.id){
        result[key] = cartItems[key]
      }
    })
    return result
    
};

export const getCartItemCount = (cartItems = {})=>{
  const cart = Object.keys(cartItems);
  if(cart.length >0){
    return cart.reduce((accum, next)=>{
      return accum = accum + cartItems[next].quantity
    }, 0)
  }else{
    return 0
  }
}

export const getCartTotal = (cartItems = {})=>{
  const cart = Object.keys(cartItems);
  if(cart.length >0){
    return cart.reduce((accum, next)=>{
      return accum = accum + (cartItems[next].quantity * cartItems[next].price)
    }, 0)
  }else{
    return 0
  }
}

export const clearItemFromCart = (cartItems, item) =>
  cartItems.filter(cartItem => cartItem.id !== item.id);