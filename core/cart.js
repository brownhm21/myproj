import create from 'zustand'

export const useCount = create((set, get) => ({
	cart: [],
	addItem: item => set(state => ({ cart: [...state.cart, item] })),
	}));