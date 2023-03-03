/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { StateCreator } from 'zustand';
import { IGames } from '../contentful';

export type CartSlice = {
  cart: IGames[];
  addToCart: (product: IGames) => void;
  removeFromCart: (productName: string | undefined) => void;
  updateQuantity: (productName: string | undefined, action: 'increase' | 'decrease') => void;
  showCart: boolean;
  toggleCart: () => void;
};

export const createCartSlice: StateCreator<CartSlice> = (set, get) => ({
  cart: [],
  addToCart: (product: IGames) => {
    const cart = get().cart;
    const findProduct = cart.find((el) => el.fields.name === product.fields.name);
    const index = cart.findIndex((el) => el.fields.name == product.fields.name);
    if (index !== -1) {
      findProduct!.quantity! += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    set({ cart });
  },
  removeFromCart: (productName: string | undefined) => {
    set({ cart: get().cart.filter((el) => el.fields.name !== productName) });
  },
  updateQuantity: (productName: string | undefined, action: 'increase' | 'decrease') => {
    const cart = get().cart;

    const findProduct = cart.find((el) => el.fields.name === productName);
    if (findProduct) {
      if (action === 'decrease') {
        findProduct.quantity =
          findProduct.quantity! > 1 ? findProduct.quantity! - 1 : findProduct.quantity!;
      } else {
        findProduct.quantity! += 1;
      }
    }
    set({ cart });
  },
  showCart: false,
  toggleCart: () => {
    set({ showCart: !get().showCart });
  }
});
