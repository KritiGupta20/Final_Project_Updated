import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/Actions/product-actions";

import Products from "../products/products";
import Title from "./title/title";
import classes from "./productList.module.css";

const ProductList = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);

	useEffect(() => {
		dispatch(fetchProduct());
	}, [dispatch]);

	return (
		<React.Fragment>
			<div className={classes.body}>
				<Title />
				<div className="container-fluid py-3 ">
					<div className="row">
						{products.map((product) => {
							return (
								<Products key={product.id} product={product} />
							);
						})}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProductList;
