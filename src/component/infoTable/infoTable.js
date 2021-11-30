import React, { useEffect } from "react";
// import {Table} from 'react-bootstrap';
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import classes from "./infoTable.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../../store/Actions/order-actions";
import APIUrls from "../../helpers/urls";

function InfoTable() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchOrders());
	}, [dispatch]);

	const {
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
	} = useSelector((state) => state.order.order);

	return (
		<React.Fragment>
			<div className={classes.body}>
				<div className={classes.heading}>
					<h2>Order Summary</h2>
				</div>
				<div class="table-responsive">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Product</th>
								<th scope="col">Name</th>
								<th scope="col">Price</th>
								<th scope="col">Quantity</th>
								<th scope="col">Mode of Payment</th>
								<th scope="col">Shipping Address</th>
								<th scope="col">Status</th>
							</tr>
						</thead>
						{myCart?.map((item) => {
							return (
								<tbody>
									<tr>
										<td className={classes.image}>
											<img
												src={`${APIUrls.root()}${
													item.img
												}`}
												alt="logo"
											/>
										</td>
										<td>{item.title}</td>
										<td>{item.total}</td>
										<td>{item.count}</td>
										<td>Credit Card</td>
										<td>
											{fName} {lName}, {address1},{" "}
											{address2}, {city}, {phone}{" "}
										</td>
										<td>
											Confirmed{" "}
											<CheckCircleOutlineRoundedIcon
												className={classes.myIcon}
											/>
										</td>
									</tr>
								</tbody>
							);
						})}
					</table>
					<hr className={classes.line}></hr>
					<div className={classes.total}>
						<h3>Tax: 10%</h3>
						<h3>ship:${delivery}</h3>
						<h3>Coupon Discount: ${coupon}</h3>
						<h3>
							Total price: <span>${cartTotal}</span>{" "}
						</h3>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default InfoTable;
