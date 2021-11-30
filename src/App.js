import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./component/navbar/navbar";
import Mylabel from "./component/label/label";
import ProductList from "./component/productList/productList";
import Details from "./component/Details/details";
import Cart from "./component/cart/cart";
import Footer from "./component/footer/footer";
import ShipDetail from "./component/cart/shipDetails/shipDetails";
import CartPayment from "./component/cart/cartPayment/cartPayment";
import OrderPlaced from "./component/orderPlaced/orderPlaced";
import SlideHeading from "./component/slideHeading/slideHeading";

import { fetchCart } from "./store/Actions/cart-actions";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCart());
	}, [dispatch]);

	return (
		<React.Fragment>
			<MyNavbar />
			<Route exact path="/" component={Mylabel} />
			<Switch>
				<Route exact path="/products" component={ProductList} />
				<Route path="/details" component={Details} />
				<Route path="/SlideHeading" component={SlideHeading} />
				<Route path="/cart" component={Cart} />
				<Route path="/shipDetails" component={ShipDetail} />
				<Route path="/CartPayment" component={CartPayment} />
				<Route path="/OrderPlaced" component={OrderPlaced} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
}

export default App;
