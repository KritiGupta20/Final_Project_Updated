import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
	name: "order",
	initialState: {
		order: {
			myCart: [],
			cartTotal: "",
			coupon: "",
			delivery: "",
			fName: "",
			lName: "",
			address1: "",
			address2: "",
			city: "",
			phone: "",
		},
	},
	reducers: {
		updateOrder(state, action) {
			console.log(action.payload);
			const { order } = action.payload;

			state.order = order;
		},
	},
});

export const orderActions = orderSlice.actions;

export default orderSlice;
