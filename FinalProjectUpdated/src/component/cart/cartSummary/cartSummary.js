import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./cartSummary.module.css";

function CartSummary(props) {
  return (
    <React.Fragment>
      <div className={classes.cartSummary}>
        <h2> Summary </h2>
        <div className={classes.coupon}>
          <input
            onChange={props.couponHandler}
            type="text"
            placeholder="ENTER COUPON CODE"
          >    
          </input>   
        </div>   
        <div className={classes.cal}>
          <Row>
            <Col className="col-lg-6  col-6  mt-3">
              <p> SUBTOTAL </p>   
            </Col>   
            <Col className="col-lg-6  col-6  mt-3">
              <p>

                <span> $ {props.cartSubTotal} </span>
              </p>
            </Col>   
            <Col className="col-lg-6  col-6 ">
              <p> SHIPPING </p>   
            </Col>   
            <Col className="col-lg-6  col-6 ">
              <p> {props.delivery} </p>   
            </Col>   
            <Col className="col-lg-6  col-6 ">
              <p> TAXES </p>   
            </Col>   
            <Col className="col-lg-6  col-6 ">
              <p> 10 % </p>   
            </Col>   
            <Col className="col-lg-6  col-6 ">
              <p> DISCOUNT </p>   
            </Col>   
            <Col className="col-lg-6  col-6 ">
              <p> $ {props.coupon} </p>   
            </Col>   
          </Row>   
        </div>   
        <div className={classes.total}>
          <Row>
            <Col className="col-lg-6">
              <p> TOTAL </p>   
            </Col>   
            <Col className="col-lg-6">
              <p>
                   
                <span> $ </span>
                {props.cartTotal}
              </p>
            </Col>   
          </Row>   
        </div>
      </div>   
    </React.Fragment>
  );
}

export default CartSummary;
