import { createSlice } from "@reduxjs/toolkit";

const shoppingDetailsSlice = createSlice({
	name: "shoppingDetails",
	initialState: {
		fName: "",
		lName: "",
		address1: "",
		address2: "",
		country: "India",
		city: "",
		phone: "",
		zip: "",
	},
	reducers: {
		updateshoppingDetails(state, action) {
			console.log(action.payload);
			const { key, value } = action.payload;
			state[key] = value;
		},
	},
});

export const shoppingDetailsActions = shoppingDetailsSlice.actions;

export default shoppingDetailsSlice;
