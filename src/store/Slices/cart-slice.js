import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		myCart: [],
		cartSubTotal: 0,
		cartTotal: 0,
		cartTax: 18,
		coupon: 10,
		delivery: 0,
	},
	reducers: {
		updateCart(state, action) {
			console.log(action.payload);
			const { cart } = action.payload;
			state.myCart = cart;

			state.cartSubTotal = cart.reduce(
				(prev, curr) => prev + curr.count * curr.price,
				0
			);

			state.cartTotal =
				state.cartSubTotal +
				state.delivery +
				state.cartSubTotal * (state.cartTax / 100) -
				state.coupon;
		},
		freeShipping(state, action) {
			state.delivery = 0;

			state.cartTotal =
				state.cartSubTotal +
				state.delivery +
				state.cartSubTotal * (state.cartTax / 100) -
				state.coupon;
		},
		nextDayDelivery(state, action) {
			state.delivery = 20;

			state.cartTotal =
				state.cartSubTotal +
				state.delivery +
				state.cartSubTotal * (state.cartTax / 100) -
				state.coupon;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
