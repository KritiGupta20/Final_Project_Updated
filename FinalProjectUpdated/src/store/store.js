import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import productSlice from "./Slices/product-slice";
import cartSlice from "./Slices/cart-slice";
import shoppingDetailsSlice from "./Slices/shoppingDetails-slice";
import cardSlice from "./Slices/card-slice";
import orderSlice from "./Slices/order-slice";

const store = configureStore({
	reducer: {
		product: productSlice.reducer,
		cart: cartSlice.reducer,
		shoppingDetails: shoppingDetailsSlice.reducer,
		card: cardSlice.reducer,
		order: orderSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
