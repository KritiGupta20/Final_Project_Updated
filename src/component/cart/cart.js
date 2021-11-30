import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import classes from "./cart.module.css";
import EmptyCart from "./emptyCart/emptyCart";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CartSummary from "./cartSummary/cartSummary";
import { Link } from "react-router-dom";
import SlideHeading from "../slideHeading/slideHeading";

import {
	fetchCart,
	incrementProductQuantity,
	derementProductQuantity,
} from "./../../store/Actions/cart-actions";
import APIUrls from "../../helpers/urls";

function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const incrementHandler = (pid) => {
		dispatch(incrementProductQuantity(pid));
	};

	const decrementHandler = (pid) => {
		dispatch(derementProductQuantity(pid));
	};

	useEffect(() => {
		dispatch(fetchCart());
	}, [dispatch]);

	const {
		myCart,
		cartSubTotal,
		cartTotal,
		cartTax,
		coupon,
		delivery,
		modal,
	} = cart;

	if (myCart.length > 0) {
		return (
			<React.Fragment>
				<SlideHeading />
				<div className={classes.cartBody}>
					<Row>
						<Col className="col-lg-8 col-md-8  col-12 ">
							<div className={classes.myCart}>
								<h2> Shopping Cart </h2>
								{myCart.map((item) => {
									return (
										<div className={classes.myCartInfo}>
											<div>
												<div
													className={
														classes.myCartImg
													}
												>
													<img
														src={`${APIUrls.root()}${
															item.img
														}`}
														alt="logo"
													/>
												</div>
												<div
													className={classes.cartLeft}
												>
													<h5> {item.title} </h5>{" "}
													<h6> {modal} </h6>
													<p>
														<span> $ </span>
														{item.price}
													</p>
												</div>
											</div>

											<div className={classes.myButton}>
												<div
													className={classes.counter}
												>
													<button>
														{item.count}
														pcs
													</button>
												</div>
												<div className={classes.arrow}>
													<button
														onClick={() =>
															incrementHandler(
																item.id
															)
														}
													>
														<span>
															<ArrowDropUpIcon />
														</span>
													</button>
													<button
														onClick={() =>
															decrementHandler(
																item.id
															)
														}
													>
														<span>
															<ArrowDropDownIcon />
														</span>
													</button>
												</div>
											</div>
										</div>
									);
								})}
							</div>
							<div className={classes.tempButton}>
								<Link to="/">
									<button
									// onClick={() => {
									// 	value.clearCartHandler();
									// }}
									>
										Cancel
									</button>
								</Link>
								<Link to="/shipDetails">
									<button> Next </button>
								</Link>
							</div>
						</Col>
						<Col className="col-lg-4 col-md-4 col-12">
							<CartSummary
								cartSubTotal={cartSubTotal}
								cartTotal={cartTotal}
								cartTax={cartTax}
								coupon={coupon}
								delivery={delivery}
								// couponHandler={value.changeCouponHandler}
							/>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		);
	} else {
		return <EmptyCart />;
	}
}

export default Cart;
