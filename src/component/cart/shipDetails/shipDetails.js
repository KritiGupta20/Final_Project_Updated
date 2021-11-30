import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Row, Form } from "react-bootstrap";
import classes from "./shipDetails.module.css";
import ShipDetailsSummary from "./shipDetailsSummary/shipDetailsSummary";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SlideHeading from "../../slideHeading/slideHeading";
import { shoppingDetailsActions } from "../../../store/Slices/shoppingDetails-slice";
import { cartActions } from "../../../store/Slices/cart-slice";

function ShipDetail() {
	const dispatch = useDispatch();
	const history = useHistory();

	const shippingPrice = useSelector((state) => state.cart.delivery);
	const { fName, lName, address1, address2, country, city, phone, zip } =
		useSelector((state) => state.shoppingDetails);

	const clickHandler = (e) => {
		e.preventDefault();
		history.push("/cartPayment");
	};

	const updateShoppingDetails = (key, value) => {
		dispatch(shoppingDetailsActions.updateshoppingDetails({ key, value }));
	};

	const freeShipHandler = () => {
		dispatch(cartActions.freeShipping());
	};

	const extraAmountHandler = () => {
		dispatch(cartActions.nextDayDelivery());
	};

	return (
		<React.Fragment>
			<SlideHeading />
			<div className={classes.detailBody}>
				<Row>
					<Col className="col-lg-8 col-md-8  col-12 ">
						<div className={classes.detailHeading}>
							<h2> Shopping Details </h2>
						</div>
						<div className={classes.myForm}>
							<Form onSubmit={clickHandler}>
								<Form.Row className="mb-3">
									<Form.Group
										as={Col}
										controlId="formGridEmail"
									>
										<Form.Control
											type="text"
											onChange={(e) =>
												updateShoppingDetails(
													"fName",
													e.target.value
												)
											}
											placeholder="First Name"
											id="first"
											required
											value={fName}
										/>
									</Form.Group>
									<Form.Group
										as={Col}
										controlId="formGridPassword"
									>
										<Form.Control
											type="text"
											onChange={(e) =>
												updateShoppingDetails(
													"lName",
													e.target.value
												)
											}
											placeholder="Last Name"
											id="last"
											required
											value={lName}
										/>
									</Form.Group>
								</Form.Row>
								<Form.Group
									className="mb-4"
									controlId="formGridAddress1"
								>
									<Form.Control
										onChange={(e) =>
											updateShoppingDetails(
												"address1",
												e.target.value
											)
										}
										placeholder="Address"
										id="address"
										required
										value={address1}
									/>
								</Form.Group>
								<Form.Group
									className="mb-4"
									controlId="formGridAddress2"
								>
									<Form.Control
										onChange={(e) =>
											updateShoppingDetails(
												"address2",
												e.target.value
											)
										}
										placeholder="Address 2"
										id="address"
										required
										value={address2}
									/>
								</Form.Group>
								<Form.Row className="mb-3">
									<Form.Group
										as={Col}
										controlId="formGridState"
									>
										<Form.Control
											as="select"
											defaultValue="Country"
											required
											onChange={(e) =>
												updateShoppingDetails(
													"country",
													e.target.value
												)
											}
											value={country}
										>
											<option> India </option>{" "}
											<option> Canada </option>
											<option> USA </option>{" "}
											<option> Australia </option>
										</Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										controlId="formGridCity"
									>
										<Form.Control
											onChange={(e) =>
												updateShoppingDetails(
													"city",
													e.target.value
												)
											}
											type="text"
											placeholder="City "
											id="city"
											required
											value={city}
										/>
									</Form.Group>
								</Form.Row>
								<Form.Row className="mb-3">
									<Form.Group
										as={Col}
										controlId="formGridEmail"
									>
										<Form.Control
											type="tel"
											maxLength="6"
											minLength="6"
											placeholder="ZIP/Postal Code"
											id="code"
											required
											onChange={(e) =>
												updateShoppingDetails(
													"zip",
													e.target.value
												)
											}
											value={zip}
										/>
									</Form.Group>
									<Form.Group
										as={Col}
										controlId="formGridPassword"
									>
										<Form.Control
											onChange={(e) =>
												updateShoppingDetails(
													"phone",
													e.target.value
												)
											}
											className={classes.input}
											type="number"
											placeholder="Phone Number"
											id="num"
											pattern="[0-9]{5}-[0-9]{5}"
											required
											value={phone}
										/>
									</Form.Group>
								</Form.Row>
								<Form.Row className={classes.myRadio}>
									<Form.Group
										as={Col}
										controlId="formGridEmail"
									>
										<div className={classes.radioButton}>
											<Form.Control
												className={classes.firstButton}
												onClick={() =>
													freeShipHandler()
												}
												type="radio"
												name="ship"
												id="one"
												checked={!shippingPrice}
											/>
											<div>
												<h6> Free Shipping </h6>
												<p>
													{" "}
													Between 2 - 5 working days{" "}
												</p>
											</div>
										</div>
									</Form.Group>
									<Form.Group
										as={Col}
										controlId="formGridPassword"
									>
										<div className={classes.radioButton}>
											<Form.Control
												className={classes.firstButton}
												onClick={() =>
													extraAmountHandler()
												}
												type="radio"
												name="ship"
												id="two"
												checked={shippingPrice}
											/>
											<div>
												<h6>
													{" "}
													Next Day Delivery - $20{" "}
												</h6>
												<p> 24 hours from checkout </p>
											</div>
										</div>
									</Form.Group>
								</Form.Row>
								<div className={classes.tempButton}>
									<Link to="cart">
										<button> Back </button>
									</Link>

									<button> Next </button>
								</div>
							</Form>
							);
						</div>
					</Col>
					<Col className="col-lg-4 col-md-4 col-12">
						<ShipDetailsSummary
						//   delivery={delivery}
						/>
					</Col>
				</Row>
			</div>
		</React.Fragment>
	);
}

export default ShipDetail;
