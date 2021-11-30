import { createSlice } from "@reduxjs/toolkit";

const initalProductState = {
	products: [],
	product: {},
};

const productSlice = createSlice({
	name: "product",
	initialState: initalProductState,
	reducers: {
		fetchProduct(state, action) {
			console.log(action.payload);
			const { products } = action.payload;
			state.products = products;
		},
		fetchSinleProduct(state, action) {
			console.log(action.payload);
			const { product } = action.payload;
			state.product = product;
		},
	},
});

export const productActions = productSlice.actions;

export default productSlice;
