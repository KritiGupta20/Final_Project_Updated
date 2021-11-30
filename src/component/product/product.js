import React from "react";
import { useDispatch } from "react-redux";

import classes from "./product.module.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";

import { addToCart } from "../../store/Actions/cart-actions";
import APIUrls from "../../helpers/urls";

// this component tells for each product

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart((product = { ...product, count: 1 })));
  };

  const { id, title, img, star, price } = product;

  return (
    <Col className="col-12  col-md-4 col-lg-4 mb-4 ">
      <div className={classes.myProduct}>
        <div
          className={classes.productImage}
          // onClick={() => value.detailsHandler(id)}
        >
          <Link to={`/details/${id}`}>
            <img src={`${APIUrls.root()}${img}`} alt="logo" />
          </Link>
          <button
            // disabled={addToCart ? true : false}
            onClick={() => {
              addToCartHandler();
            }}
          >
            <p>Add TO Cart</p>
          </button>
        </div>
        <div className={classes.productInfo}>
          <h5> {title} </h5>
          <div className={classes.starIcons}>
            {" "}
            {star.map((each, i) =>
              each === "<StarRoundedIcon />" ? (
                <StarRoundedIcon key={i} />
              ) : (
                <StarOutlineRoundedIcon key={i} />
              )
            )}{" "}
          </div>
          <p>
            <span> $ </span>
            {price}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default Product;
