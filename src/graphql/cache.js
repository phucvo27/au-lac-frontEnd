import { makeVar } from '@apollo/client';

const cacheCarts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : []
export const cartItemsVar = makeVar(cacheCarts);