const API_ROOT = `https://dummy-api-ecomm.herokuapp.com`;

const APIUrls = {
	root: () => API_ROOT,

	//Products
	allProducts: () => `${API_ROOT}/product/allProducts`,
	productById: (id) => `${API_ROOT}/product/${id}`,

	//Cart
	wholeCart: () => `${API_ROOT}/cart/whole`,
	addToCart: () => `${API_ROOT}/cart/add`,
	removeFromCart: (id) => `${API_ROOT}/cart/remove/${id}`,
	incrementProductQuantity: (id) => `${API_ROOT}/cart/increment/${id}`,
	derementProductQuantity: (id) => `${API_ROOT}/cart/decrement/${id}`,

	//Order
	allOrders: () => `${API_ROOT}/order/whole`,
	newOrder: () => `${API_ROOT}/order/new`,
};

export default APIUrls;
