import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartSlice, createCartSlice } from './gamesCartSlice';

export const useAppStore = create<CartSlice>()(
  persist(
    (...a) => ({
      ...createCartSlice(...a)
    }),
    {
      name: 'games'
    }
  )
);
