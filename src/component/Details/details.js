import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import classes from "./details.module.css";
import { Link, useLocation } from "react-router-dom";
import Review from "./review/review";
import { fetchSingleProduct } from "../../store/Actions/product-actions";
import APIUrls from "../../helpers/urls";

import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import { addToCart } from "../../store/Actions/cart-actions";

const Details = () => {
	const location = useLocation().pathname;
	const productId = location?.split("/")[location?.split("/").length - 1];
	console.log("Cheking for params", location, productId);
	const dispatch = useDispatch();
	let product = useSelector((state) => state.product.product);

	const { id, img, img2, img3, title, price, star, info, review, variant } =
		product;

	const addToCartHandler = () => {
		dispatch(addToCart((product = { ...product, count: 1 })));
	};

	useEffect(() => {
		dispatch(fetchSingleProduct(productId));
	}, [dispatch, productId]);

	return (
		<React.Fragment>
			<div className={classes.details}>
				<Row>
					<Col className="col-lg-6 col-md-6 col-12">
						<div className={classes.detailImage}>
							<div
								id="carouselExampleIndicators"
								class="carousel slide"
								data-ride="carousel"
							>
								<ol class="carousel-indicators">
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="0"
										class="active"
									>
										<img
											src={`${APIUrls.root()}${img}`}
											alt="logo"
										/>
									</li>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="1"
									>
										<img
											src={`${APIUrls.root()}${img2}`}
											alt="logo"
										/>
									</li>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="2"
									>
										<img
											src={`${APIUrls.root()}${img3}`}
											alt="logo"
										/>
									</li>
								</ol>
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img
											class="d-block "
											src={`${APIUrls.root()}${img}`}
											alt="First slide"
										/>
									</div>
									<div class="carousel-item">
										<img
											class="d-block "
											src={`${APIUrls.root()}${img2}`}
											alt="Second slide"
										/>
									</div>
									<div class="carousel-item">
										<img
											class="d-block "
											src={`${APIUrls.root()}${img3}`}
											alt="Third slide"
										/>
									</div>
								</div>
								<a
									class="carousel-control-prev d-none"
									href="#carouselExampleIndicators"
									role="button"
									data-slide="prev"
								>
									<span
										class="carousel-control-prev-icon"
										aria-hidden="true"
									></span>
									<span class="sr-only">Previous</span>
								</a>
								<a
									class="carousel-control-next d-none"
									href="#carouselExampleIndicators"
									role="button"
									data-slide="next"
								>
									<span
										class="carousel-control-next-icon"
										aria-hidden="true"
									></span>
									<span class="sr-only">Next</span>
								</a>
							</div>
						</div>
					</Col>
					<Col className="col-lg-6 col-md-6 col-12">
						<div className={classes.detailInfo}>
							<div className={classes.detailsHeading}>
								<h2>{title}</h2>
								<div>
									<span>
										{" "}
										{star &&
											star.map((each, i) =>
												each ===
												"<StarRoundedIcon />" ? (
													<StarRoundedIcon key={i} />
												) : (
													<StarOutlineRoundedIcon
														key={i}
													/>
												)
											)}{" "}
									</span>
									<p>
										{review && Object.keys(review).length}{" "}
										reviews
									</p>
								</div>
							</div>
							<div className={classes.detailPrice}>
								<p>
									<span>$</span>
									{price}
								</p>
								<select
									onChange={(e) => {
										// value.variantHandler(e.target.value);
									}}
									className="ml-auto"
								>
									{variant?.map((item) => (
										<option
											key={item.key}
											value={item.value}
										>
											{item.value}
										</option>
									))}
								</select>
							</div>
							<div className={classes.detailPara}>
								<p>{info}</p>
							</div>
							<Link to="/cart">
								<button
									onClick={() => {
										addToCartHandler(id);
									}}
								>
									<p>Add TO Cart</p>
								</button>
							</Link>
						</div>
					</Col>
				</Row>
			</div>
			{review && <Review review={review} star={star} />}
		</React.Fragment>
	);
};

export default Details;
