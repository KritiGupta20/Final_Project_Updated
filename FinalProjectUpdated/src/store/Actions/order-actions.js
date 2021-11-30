import axios from "axios";
import { orderActions } from "../Slices/order-slice";

import APIUrls from "../../helpers/urls";

export const fetchOrders = () => {
	return async (dispatch) => {
		axios
			.get(APIUrls.allOrders())
			.then((res) => {
				console.log(res);
				dispatch(orderActions.updateOrder({ order: res.data.order }));
			})
			.catch((err) => {
				if (err?.response?.data?.message)
					console.log(err?.response?.data?.message);
			});
	};
};

export const newOrder = (order) => {
	return async (dispatch) => {
		console.log("Checking if exists", order);

		axios
			.post(APIUrls.newOrder(), { order })
			.then((res) => {
				console.log(res);
				dispatch(orderActions.updateOrder({ order: res.data.order }));
			})
			.catch((err) => {
				if (err?.response?.data?.message)
					console.log(err?.response?.data?.message);
			});
	};
};
