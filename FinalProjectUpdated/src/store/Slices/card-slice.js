import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
	name: "card",
	initialState: {
		cardNumber: "",
		expiry: "",
		cvv: "",
		cardHolderName: "",
	},
	reducers: {
		updateCard(state, action) {
			console.log(action.payload);
			const { key, value } = action.payload;

			state[key] = value;
		},
	},
});

export const cardActions = cardSlice.actions;

export default cardSlice;
