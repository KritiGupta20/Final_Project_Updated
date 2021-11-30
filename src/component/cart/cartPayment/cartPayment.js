import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { Col, Row, InputGroup, FormControl, Form } from "react-bootstrap";
import classes from "./cartPayment.module.css";
import ShipDetailsSummary from "../shipDetails/shipDetailsSummary/shipDetailsSummary";
import { Link } from "react-router-dom";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import SlideHeading from "../../slideHeading/slideHeading";
import { cardActions } from "../../../store/Slices/card-slice";
import { newOrder } from "../../../store/Actions/order-actions";

function CartPayment() {
	const history = useHistory();
	const dispatch = useDispatch();

	const { cardNumber, expiry, cvv, cardHolderName } = useSelector(
		(state) => state.card
	);
	const { myCart, cartTotal, coupon, delivery } = useSelector(
		(state) => state.cart
	);
	const { fName, lName, address1, address2, city, phone } = useSelector(
		(state) => state.shoppingDetails
	);

	const [errorMessage, setErrorMessage] = useState("");
	const [cvvMessage, setCvvMessage] = useState("");

	const cardDetailsUpdateHandler = (key, value) => {
		dispatch(cardActions.updateCard({ key, value }));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		history.push("/orderPlaced");
	};

	const validateCreditCard = (value) => {
		if (value.length !== 16) {
			setErrorMessage("Enter valid Credit Card Number!");
		} else {
			setErrorMessage("");
		}
	};

	const validateExpiry = (value) => {
		let [m, y] = value.split("/");

		m = +m;
		y = +y;

		if (
			y < new Date().getFullYear() - 2000 ||
			(y === new Date().getFullYear() - 2000 &&
				m < new Date().getMonth() + 1)
		)
			setErrorMessage("Card Expired");
		else setErrorMessage("");
	};

	const validateCvv = (value) => {
		if (value.length === 3) {
			setCvvMessage("");
		} else {
			setCvvMessage("Enter valid CVV!");
		}
	};

	const payNowHandler = () => {
		const order = {
			myCart,
			cartTotal,
			coupon,
			delivery,
			fName,
			lName,
			address1,
			address2,
			city,
			phone,
		};
		dispatch(newOrder(order));
	};

	return (
		<React.Fragment>
			<SlideHeading />
			<div className={classes.PaymentBody}>
				<Row>
					<Col className="col-lg-8 col-md-8  col-12 ">
						<Form onSubmit={submitHandler}>
							<div className={classes.PaymentHeading}>
								<h2> Payment method </h2>
							</div>
							<div className={classes.creditCard}>
								<div className={classes.cardHeading}>
									<div className={classes.radioButton}>
										<input
											type="radio"
											name="payment"
											checked
										/>
									</div>
									<div>
										<h6> Credit Card </h6>
									</div>
								</div>
								<div className={classes.creditCardInfo}>
									<Row className="py-3">
										<Col className="col-md-6 col-12">
											<InputGroup className="mb-3">
												<FormControl
													className={classes.input}
													onChange={(e) => {
														cardDetailsUpdateHandler(
															"cardNumber",
															e.target.value
														);
														validateCreditCard(
															e.target.value
														);
													}}
													type="number"
													placeholder="0000 0000 0000 0000 "
													required
													value={cardNumber}
												/>

												<InputGroup.Append>
													<InputGroup.Text id="basic-addon2">
														<CreditCardIcon />
													</InputGroup.Text>
												</InputGroup.Append>
											</InputGroup>
										</Col>
										<Col className="col-md-3 col-6">
											<FormControl
												className={classes.monthInput}
												type="text"
												placeholder="MM/YY"
												minLength="3"
												maxLength="5"
												required
												onChange={(e) => {
													cardDetailsUpdateHandler(
														"expiry",
														e.target.value
													);
													validateExpiry(
														e.target.value
													);
												}}
												value={expiry}
											/>
										</Col>
										<Col className="col-md-3 col-6">
											<InputGroup className="mb-3">
												<FormControl
													className={classes.input}
													onChange={(e) => {
														cardDetailsUpdateHandler(
															"cvv",
															e.target.value
														);
														validateCvv(
															e.target.value
														);
													}}
													type="password"
													placeholder="CVV"
													required
													value={cvv}
												/>
											</InputGroup>
											<span
												style={{
													fontWeight: "bold",
													color: "red",
												}}
											>
												{cvvMessage}
											</span>
										</Col>
									</Row>
									<span
										style={{
											fontWeight: "bold",
											color: "red",
										}}
									>
										{errorMessage}
									</span>
									<Row>
										<Col className="col-md-12">
											<FormControl
												className={classes.input}
												type="text"
												placeholder="Card Holder Name"
												required
												onChange={(e) => {
													cardDetailsUpdateHandler(
														"cardHolderName",
														e.target.value
													);
												}}
												value={cardHolderName}
											/>
										</Col>
									</Row>
								</div>
							</div>
							<div className={classes.cardBorder}>
								<div className={classes.paypal}>
									<div className={classes.paypalHeading}>
										<div className={classes.paypalButton}>
											<input
												type="radio"
												name="payment"
												disabled
											/>
										</div>
										<div>
											<h6> Paypal </h6>
										</div>
									</div>
									<div className={classes.paypalLogo}>
										<AccountBalanceWalletIcon
											className={classes.firstLogo}
										/>
									</div>
								</div>
							</div>
							<div className={classes.tempButton}>
								<Link to="/shipDetails">
									<button> Back </button>
								</Link>
								<button onClick={payNowHandler}>
									{" "}
									Pay Now{" "}
								</button>
							</div>
						</Form>
					</Col>
					<Col className="col-lg-4 col-md-4 col-12">
						<ShipDetailsSummary />
					</Col>
				</Row>
			</div>
		</React.Fragment>
	);
}

export default CartPayment;
